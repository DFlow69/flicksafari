
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
  // Add validation to ensure items is an array
  const validItems = Array.isArray(items) ? items : [];
  
  // Log any issues with the data for debugging
  if (!Array.isArray(items)) {
    console.error('MediaGrid received invalid items:', items);
  }

  return (
    <div className="animate-fade-in">
      {title && (
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      )}
      
      {validItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No media items found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {validItems.map((item, index) => {
            // Check if this item has all required properties
            if (!item || typeof item !== 'object' || !item.id) {
              console.error('Invalid media item:', item);
              return null; // Skip invalid items
            }
            
            return (
              <div 
                key={item.id || index} 
                className="animate-scale-in" 
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <MediaCard {...item} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MediaGrid;
