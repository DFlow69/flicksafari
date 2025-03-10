
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Clock, Calendar } from 'lucide-react';
import Layout from '../components/Layout';
import VideoPlayer from '../components/VideoPlayer';
import { getMediaById } from '../data/data';

const MediaDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [media, setMedia] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const mediaItem = getMediaById(id);
      setMedia(mediaItem || null);
      setLoading(false);
    }
  }, [id]);

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
              <div className="mt-4 mb-8 animate-slide-up">
                <VideoPlayer 
                  videoUrl={media.videoUrl} 
                  poster={media.imageUrl}
                />
              </div>
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
