
// Helper functions for working with media data
import { validateMediaItems } from '../utils/dataValidation';

/**
 * Safely retrieves all media items with validation
 * @param {Object} mediaData The raw media data object
 * @returns {Array} An array of validated media items
 */
export const getAllMediaSafe = (mediaData) => {
  if (!mediaData) {
    console.error('Media data is undefined or null');
    return [];
  }

  try {
    const allMedia = [
      ...(Array.isArray(mediaData.movies) ? mediaData.movies : []),
      ...(Array.isArray(mediaData.tvShows) ? mediaData.tvShows : []),
      ...(Array.isArray(mediaData.anime) ? mediaData.anime : [])
    ];
    
    return validateMediaItems(allMedia);
  } catch (error) {
    console.error('Error retrieving all media:', error);
    return [];
  }
};

/**
 * Safely retrieves media by ID with validation
 * @param {string} id The media ID to look up
 * @param {Object} mediaData The raw media data object
 * @returns {Object|null} The found media item or null
 */
export const getMediaByIdSafe = (id, mediaData) => {
  if (!id || !mediaData) return null;
  
  try {
    const allMedia = getAllMediaSafe(mediaData);
    return allMedia.find(item => item.id === id) || null;
  } catch (error) {
    console.error(`Error retrieving media with id ${id}:`, error);
    return null;
  }
};

/**
 * Safely searches media by query with validation
 * @param {string} query The search query
 * @param {Object} mediaData The raw media data object
 * @returns {Array} An array of matching media items
 */
export const searchMediaSafe = (query, mediaData) => {
  if (!query || !mediaData) return [];
  
  try {
    const allMedia = getAllMediaSafe(mediaData);
    const lowercaseQuery = query.toLowerCase();
    
    return allMedia.filter(item => 
      item.title.toLowerCase().includes(lowercaseQuery) || 
      (item.description && item.description.toLowerCase().includes(lowercaseQuery)) ||
      (Array.isArray(item.genre) && item.genre.some(g => g.toLowerCase().includes(lowercaseQuery)))
    );
  } catch (error) {
    console.error(`Error searching media with query '${query}':`, error);
    return [];
  }
};
