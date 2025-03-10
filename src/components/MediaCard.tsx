
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
          className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${imageLoaded ? 'image-loaded' : 'image-loading'} ${isHovered ? 'scale-110' : 'scale-100'}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <img 
          src={imageUrl} 
          alt={title} 
          className="opacity-0 w-full h-full object-cover" 
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-14 w-14 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110">
            <Play fill="white" size={22} className="ml-1" />
          </div>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-md">
          ★ {rating.toFixed(1)}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-3">
        <h3 className="font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        
        <div className="flex items-center mt-1 text-xs text-muted-foreground">
          <span>{releaseYear}</span>
          <span className="mx-1.5">•</span>
          {runtime ? (
            <span>{runtime}</span>
          ) : seasons ? (
            <span>{seasons} {seasons === 1 ? 'Season' : 'Seasons'}</span>
          ) : null}
        </div>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {genre.slice(0, 2).map(g => (
            <span key={g} className="inline-block text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
              {g}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;
