
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search when route changes
  useEffect(() => {
    setShowSearch(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur shadow-md py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-bold tracking-tight text-primary transition-all duration-300 hover:opacity-80"
            >
              StreamVista
            </Link>

            {/* Main Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <NavLink to="/movies" active={location.pathname === '/movies'}>
                Movies
              </NavLink>
              <NavLink to="/tvshows" active={location.pathname === '/tvshows'}>
                TV Shows
              </NavLink>
              <NavLink to="/anime" active={location.pathname === '/anime'}>
                Anime
              </NavLink>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Search Toggle */}
              <button 
                className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
                onClick={() => setShowSearch(!showSearch)}
                aria-label="Toggle search"
              >
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Search Bar - Expandable */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            showSearch ? 'max-h-20 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <SearchBar />
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-t">
        <div className="flex justify-around items-center py-3">
          <NavLinkMobile to="/movies" active={location.pathname === '/movies'}>
            Movies
          </NavLinkMobile>
          <NavLinkMobile to="/tvshows" active={location.pathname === '/tvshows'}>
            TV Shows
          </NavLinkMobile>
          <NavLinkMobile to="/anime" active={location.pathname === '/anime'}>
            Anime
          </NavLinkMobile>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-24 pb-20 md:pb-10 min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-6 bg-muted/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>StreamVista © {new Date().getFullYear()} — Premium streaming experience</p>
        </div>
      </footer>
    </div>
  );
};

// Desktop Navigation Link Component
const NavLink: React.FC<{ to: string; active: boolean; children: React.ReactNode }> = ({ 
  to, 
  active, 
  children 
}) => {
  return (
    <Link 
      to={to} 
      className={`relative px-3 py-2 rounded-md font-medium transition-all duration-200 ${
        active 
          ? 'text-foreground' 
          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
      }`}
    >
      {children}
      {active && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full tab-indicator" />
      )}
    </Link>
  );
};

// Mobile Navigation Link Component
const NavLinkMobile: React.FC<{ to: string; active: boolean; children: React.ReactNode }> = ({ 
  to, 
  active, 
  children 
}) => {
  return (
    <Link 
      to={to} 
      className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
        active 
          ? 'text-primary bg-muted/50' 
          : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
      }`}
    >
      {children}
    </Link>
  );
};

export default Layout;
