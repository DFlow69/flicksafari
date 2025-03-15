
// Data validation utilities for media items

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

/**
 * Validates a media item to ensure it has all required properties
 * @param item The media item to validate
 * @returns A validated media item with defaults for missing properties
 */
export const validateMediaItem = (item: any): MediaItem => {
  if (!item || typeof item !== 'object') {
    console.error('Invalid media item:', item);
    return createDefaultMediaItem();
  }

  return {
    id: item.id || `media-${Date.now()}`,
    title: item.title || 'Untitled Media',
    imageUrl: item.imageUrl || 'https://placehold.co/600x900/222/white?text=No+Image',
    releaseYear: typeof item.releaseYear === 'number' ? item.releaseYear : new Date().getFullYear(),
    rating: typeof item.rating === 'number' ? item.rating : 0,
    genre: Array.isArray(item.genre) ? item.genre : ['Unknown'],
    runtime: item.runtime,
    seasons: item.seasons,
  };
};

/**
 * Validates an array of media items
 * @param items Array of media items to validate
 * @returns Array of validated media items
 */
export const validateMediaItems = (items: any[]): MediaItem[] => {
  if (!Array.isArray(items)) {
    console.error('Expected array of media items but got:', items);
    return [];
  }

  return items.map(validateMediaItem);
};

/**
 * Creates a default media item
 * @returns A default media item
 */
export const createDefaultMediaItem = (): MediaItem => {
  return {
    id: `media-${Date.now()}`,
    title: 'Untitled Media',
    imageUrl: 'https://placehold.co/600x900/222/white?text=No+Image',
    releaseYear: new Date().getFullYear(),
    rating: 0,
    genre: ['Unknown'],
  };
};
