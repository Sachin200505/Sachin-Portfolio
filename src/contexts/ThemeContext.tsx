import React, { createContext, useContext, useEffect, useState } from 'react';

interface ColorPalette {
  name: string;
  primary: string;
  secondary: string;
}

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  colorPalette: ColorPalette;
  setColorPalette: (palette: ColorPalette) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'true') return true;
    if (saved === 'false') return false;
    return false; // default: light theme
  });

  const [colorPalette, setColorPalette] = useState<ColorPalette>(() => {
    const saved = localStorage.getItem('colorPalette');
    return saved ? JSON.parse(saved) : { name: 'Default', primary: 'blue', secondary: 'purple' };
  });

  // ✅ Apply dark/light class and save to localStorage
  useEffect(() => {
    const root = document.documentElement;

    // Store in localStorage
    localStorage.setItem('theme', JSON.stringify(isDark));
    localStorage.setItem('colorPalette', JSON.stringify(colorPalette));

    // Toggle dark mode class
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Optional: Apply color palette as CSS variables
    root.style.setProperty('--primary-color', colorPalette.primary);
    root.style.setProperty('--secondary-color', colorPalette.secondary);
  }, [isDark, colorPalette]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, colorPalette, setColorPalette }}>
      {children}
    </ThemeContext.Provider>
  );
};
