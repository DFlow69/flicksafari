
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-yellow-300" />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
