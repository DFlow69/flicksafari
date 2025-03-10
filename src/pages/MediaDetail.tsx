
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Clock, Calendar, Play } from 'lucide-react';
import Layout from '../components/Layout';
import VideoPlayer from '../components/VideoPlayer';
import { getMediaById, getEpisodesForMedia } from '../data/data';

const MediaDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [media, setMedia] = useState<any | null>(null);
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [currentEpisode, setCurrentEpisode] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const mediaItem = getMediaById(id);
      const mediaEpisodes = mediaItem ? getEpisodesForMedia(id) : [];
      
      setMedia(mediaItem || null);
      setEpisodes(mediaEpisodes);
      
      // For movies, use the media's video URL
      // For TV shows and anime, use the first episode if available
      if (mediaItem) {
        if (id.startsWith('movie-')) {
          setCurrentEpisode(null); // Use media's videoUrl for movies
        } else if (mediaEpisodes.length > 0) {
          setCurrentEpisode(mediaEpisodes[0]);
        }
      }
      
      setLoading(false);
    }
  }, [id]);

  const handleEpisodeSelect = (episode: any) => {
    setCurrentEpisode(episode);
    // Scroll to video player
    document.getElementById('video-player')?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredEpisodes = episodes.filter(ep => ep.season === selectedSeason);
  const availableSeasons = [...new Set(episodes.map(ep => ep.season))].sort((a, b) => a - b);

  if (loading) {
    return (
      <Layout>
        <div className="container px-4 md:px-6 flex justify-center items-center min-h-[50vh]">
          <div className="animate-pulse h-4 w-32 bg-muted rounded"></div>
        </div>
      </Layout>
    );
  }

  if (!media) {
    return (
      <Layout>
        <div className="container px-4 md:px-6 text-center py-20">
          <h2 className="text-2xl font-semibold mb-4">Media not found</h2>
          <p className="text-muted-foreground mb-6">
            We couldn't find the media item you're looking for.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Go Back
          </button>
        </div>
      </Layout>
    );
  }

  const isMovie = id?.startsWith('movie-');
  const mediaType = id?.startsWith('movie-') 
    ? 'Movie' 
    : id?.startsWith('tv-') 
      ? 'TV Show' 
      : 'Anime';

  return (
    <Layout>
      {/* Hero Section with Background */}
      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${media.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        
        <div className="container relative px-4 md:px-6 py-8 md:py-12">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-3 py-1.5 rounded-md bg-background/80 backdrop-blur border border-border mb-6 hover:bg-muted/70 transition-colors animate-fade-in"
          >
            <ArrowLeft size={16} className="mr-1" /> Back
          </button>

          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 animate-fade-in">
            {/* Media Poster */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-full max-w-[300px] aspect-[2/3] rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={media.imageUrl} 
                  alt={media.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-full max-w-[300px] mt-4 flex flex-col gap-3">
                <MediaDetailStat 
                  icon={<Star className="text-yellow-400" size={18} />}
                  label="Rating"
                  value={`${media.rating.toFixed(1)}/10`}
                />
                
                <MediaDetailStat 
                  icon={<Calendar size={18} />}
                  label="Released"
                  value={media.releaseYear.toString()}
                />
                
                {media.runtime && (
                  <MediaDetailStat 
                    icon={<Clock size={18} />}
                    label="Runtime"
                    value={media.runtime}
                  />
                )}
                
                {media.seasons && (
                  <MediaDetailStat 
                    icon={<Clock size={18} />}
                    label="Seasons"
                    value={`${media.seasons} ${media.seasons === 1 ? 'Season' : 'Seasons'}`}
                  />
                )}
              </div>
            </div>
            
            {/* Media Details */}
            <div className="flex flex-col">
              <div className="mb-6">
                <div className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary mb-3">
                  {mediaType}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{media.title}</h1>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {media.genre.map((genre: string) => (
                    <span 
                      key={genre} 
                      className="inline-block text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">{media.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    {mediaType === 'Movie' ? 'Director' : 'Creator'}
                  </h3>
                  <p className="font-medium">{media.director || media.creator}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Starring</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {media.starring.map((star: string) => (
                      <span key={star}>{star}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Video Player */}
              <div id="video-player" className="mt-4 mb-8 animate-slide-up">
                <VideoPlayer 
                  videoUrl={currentEpisode ? currentEpisode.videoUrl : media.videoUrl} 
                  poster={media.imageUrl}
                />
                
                {currentEpisode && !isMovie && (
                  <div className="mt-2 mb-4">
                    <h3 className="text-lg font-medium">
                      S{currentEpisode.season} E{currentEpisode.episode}: {currentEpisode.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">Duration: {currentEpisode.duration}</p>
                  </div>
                )}
              </div>
              
              {/* Episodes (for TV Shows and Anime) */}
              {!isMovie && episodes.length > 0 && (
                <div className="mt-8 animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">Episodes</h2>
                    
                    {availableSeasons.length > 1 && (
                      <div className="flex items-center space-x-2">
                        <label className="text-sm font-medium">Season:</label>
                        <select 
                          value={selectedSeason}
                          onChange={(e) => setSelectedSeason(Number(e.target.value))}
                          className="bg-muted px-3 py-1.5 rounded-md border border-border text-sm"
                        >
                          {availableSeasons.map(season => (
                            <option key={season} value={season}>
                              Season {season}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    {filteredEpisodes.map((episode, index) => (
                      <div 
                        key={episode.id}
                        className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                          currentEpisode?.id === episode.id 
                            ? 'bg-primary/20 border border-primary/30' 
                            : 'hover:bg-muted'
                        }`}
                        onClick={() => handleEpisodeSelect(episode)}
                      >
                        <div className="w-10 h-10 flex items-center justify-center bg-muted rounded-full mr-4 shrink-0">
                          {currentEpisode?.id === episode.id ? (
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          ) : (
                            <Play size={16} />
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between mb-1">
                            <span className="text-xs text-muted-foreground">
                              Episode {episode.episode}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {episode.duration}
                            </span>
                          </div>
                          <h4 className="text-sm font-medium truncate">
                            {episode.title}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Helper component for media details
const MediaDetailStat: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  value: string;
}> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
      {icon}
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

export default MediaDetail;
