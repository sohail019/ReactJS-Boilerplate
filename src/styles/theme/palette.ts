import { PaletteOptions } from '@mui/material/styles';

const lightPalette: PaletteOptions = {
  primary: { main: '#1976d2', contrastText: '#ffffff' },
  secondary: { main: '#ff4081', contrastText: '#ffffff' },
  background: { default: '#f4f5f7', paper: '#ffffff' },
  text: { primary: '#000000', secondary: '#555555' },
};

const darkPalette: PaletteOptions = {
  primary: { main: '#90caf9', contrastText: '#000000' },
  secondary: { main: '#f48fb1', contrastText: '#000000' },
  background: { default: '#121212', paper: '#1d1d1d' },
  text: { primary: '#ffffff', secondary: '#cccccc' },
};

export default { light: lightPalette, dark: darkPalette };
