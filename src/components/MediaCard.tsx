
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

interface MediaCardProps {
  id: string;
  title: string;
  imageUrl: string;
  releaseYear: number;
  rating: number;
  genre: string[];
  runtime?: string;
  seasons?: number;
  episodes?: Array<{
    id: string;
    title: string;
    season: number;
    episode: number;
    duration: string;
    videoUrl: string;
  }>;
}

const MediaCard: React.FC<MediaCardProps> = ({
  id,
  title,
  imageUrl,
  releaseYear,
  rating,
  genre,
  runtime,
  seasons
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Provide default values for potentially problematic props
  const safeImageUrl = imageUrl || 'https://placehold.co/600x900/222/white?text=No+Image';
  const safeTitle = title || 'Untitled Media';
  const safeRating = typeof rating === 'number' ? rating : 0;
  const safeReleaseYear = typeof releaseYear === 'number' ? releaseYear : new Date().getFullYear();
  const safeGenre = Array.isArray(genre) ? genre : [];

  return (
    <Link 
      to={`/media/${id}`}
      className="media-card group block relative rounded-xl overflow-hidden bg-card border border-border transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Image */}
      <div className="aspect-[2/3] relative overflow-hidden">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${imageLoaded && !imageError ? 'image-loaded' : 'image-loading'} ${isHovered ? 'scale-110' : 'scale-100'}`}
          style={{ backgroundImage: `url(${safeImageUrl})` }}
        />
        <img 
          src={safeImageUrl} 
          alt={safeTitle} 
          className="opacity-0 w-full h-full object-cover" 
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            console.error(`Failed to load image for: ${safeTitle}`);
          }}
        />
        
        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-14 w-14 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110">
            <Play fill="white" size={22} className="ml-1" />
          </div>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md">
          ★ {safeRating.toFixed(1)}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-3">
        <h3 className="font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-200">
          {safeTitle}
        </h3>
        
        <div className="flex items-center mt-1 text-xs text-muted-foreground">
          <span>{safeReleaseYear}</span>
          <span className="mx-1.5">•</span>
          {runtime ? (
            <span>{runtime}</span>
          ) : seasons ? (
            <span>{seasons} {seasons === 1 ? 'Season' : 'Seasons'}</span>
          ) : (
            <span>--</span>
          )}
        </div>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {safeGenre.slice(0, 2).map((g, index) => (
            <span key={index} className="inline-block text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
              {g}
            </span>
          ))}
          {safeGenre.length === 0 && (
            <span className="inline-block text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
              Unknown
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;
