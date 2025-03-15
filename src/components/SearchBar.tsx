
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { searchMedia } from '../data/data';
import { Input } from "@/components/ui/input";

// Define types for media items
interface MediaItem {
  id: string;
  title: string;
  imageUrl: string;
  releaseYear: number;
  genre: string[];
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<MediaItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Handle search query changes with debounce
  useEffect(() => {
    if (query.length >= 2) {
      setIsLoading(true);
      setError(null);
      
      // Simulate network delay for a more realistic search experience
      const timer = setTimeout(() => {
        try {
          const searchResults = searchMedia(query);
          setResults(searchResults || []); // Ensure we handle null/undefined
          setIsOpen(true);
        } catch (err) {
          console.error('Search error:', err);
          setError('An error occurred while searching. Please try again.');
          setResults([]);
        } finally {
          setIsLoading(false);
        }
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setIsOpen(false);
      setError(null);
    }
  }, [query]);

  // Handle clicks outside of search results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when search is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle selection of a search result
  const handleSelect = (id: string) => {
    setQuery('');
    setIsOpen(false);
    navigate(`/media/${id}`);
  };

  // Clear search
  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setError(null);
  };

  return (
    <div className="relative w-full" ref={searchRef}>
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search movies, TV shows, anime..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-2 bg-muted/50 focus:ring-2 focus:ring-primary/30"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Loading indicator */}
      {isLoading && query.length >= 2 && (
        <div className="absolute mt-2 left-0 right-0 z-10 bg-background border border-border rounded-lg shadow-lg p-4 text-center animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex items-center justify-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-primary animate-pulse"></div>
            <div className="h-3 w-3 rounded-full bg-primary animate-pulse delay-150"></div>
            <div className="h-3 w-3 rounded-full bg-primary animate-pulse delay-300"></div>
          </div>
        </div>
      )}

      {/* Error message */}
      {error && !isLoading && (
        <div className="absolute mt-2 left-0 right-0 z-10 bg-destructive/10 border border-destructive/30 rounded-lg shadow-lg p-4 text-center animate-in fade-in slide-in-from-top-5 duration-300">
          <p className="text-destructive">{error}</p>
        </div>
      )}

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && !isLoading && !error && (
        <div className="absolute mt-2 left-0 right-0 z-10 bg-background border border-border rounded-lg shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="max-h-[60vh] overflow-y-auto">
            {results.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-3 border-b border-border hover:bg-muted/50 cursor-pointer transition-colors duration-150"
                onClick={() => handleSelect(item.id)}
              >
                <div 
                  className="h-12 w-12 md:h-16 md:w-16 rounded bg-muted mr-3 flex-shrink-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${item.imageUrl || 'https://placehold.co/300x450/222/white?text=No+Image'})` }}
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground truncate">{item.title}</h4>
                  <div className="flex items-center mt-1 text-xs text-muted-foreground">
                    <span className="mr-2">{item.releaseYear}</span>
                    <span className="mr-2">•</span>
                    <span>{Array.isArray(item.genre) ? item.genre.slice(0, 2).join(', ') : 'Unknown'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results Message */}
      {isOpen && query.length >= 2 && results.length === 0 && !isLoading && !error && (
        <div className="absolute mt-2 left-0 right-0 z-10 bg-background border border-border rounded-lg shadow-lg p-4 text-center animate-in fade-in slide-in-from-top-5 duration-300">
          <p className="text-muted-foreground">No results found for "{query}"</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
