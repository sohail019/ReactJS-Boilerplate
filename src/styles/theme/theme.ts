import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';

const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      ...palette[mode],
    },
    typography,
  });

export default getTheme;
