
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { searchMedia } from '../data/data';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Handle search query changes
  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = searchMedia(query);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
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
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search movies, TV shows, anime..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 pl-10 rounded-lg bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute mt-2 left-0 right-0 z-10 bg-background border border-border rounded-lg shadow-lg overflow-hidden animate-slide-down">
          <div className="max-h-[60vh] overflow-y-auto">
            {results.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-3 border-b border-border hover:bg-muted/50 cursor-pointer transition-colors duration-150"
                onClick={() => handleSelect(item.id)}
              >
                <div 
                  className="h-12 w-12 md:h-16 md:w-16 rounded bg-muted mr-3 flex-shrink-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground truncate">{item.title}</h4>
                  <div className="flex items-center mt-1 text-xs text-muted-foreground">
                    <span className="mr-2">{item.releaseYear}</span>
                    <span className="mr-2">•</span>
                    <span>{item.genre.slice(0, 2).join(', ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results Message */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute mt-2 left-0 right-0 z-10 bg-background border border-border rounded-lg shadow-lg p-4 text-center animate-slide-down">
          <p className="text-muted-foreground">No results found for "{query}"</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
