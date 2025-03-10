
import React from 'react';
import MediaCard from './MediaCard';

interface MediaItem {
  id: string;
  title: string;
  imageUrl: string;
  releaseYear: number;
  rating: number;
  genre: string[];
  runtime?: string;
  seasons?: number;
}

interface MediaGridProps {
  items: MediaItem[];
  title?: string;
}

const MediaGrid: React.FC<MediaGridProps> = ({ items, title }) => {
  return (
    <div className="animate-fade-in">
      {title && (
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className="animate-scale-in" 
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <MediaCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaGrid;
