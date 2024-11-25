import { ThemeProvider } from '@mui/material';
import { createContext, ReactNode, useMemo, useState } from 'react';
import getTheme from '../styles/theme/theme';

interface ThemeContextProps {
  mode: 'light' | 'dark';
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const storedMode = localStorage.getItem('themeMode');
  const initialMode = storedMode === 'dark' ? 'dark' : 'light';

  const [mode, setMode] = useState<'light' | 'dark'>(initialMode);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode); 
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
