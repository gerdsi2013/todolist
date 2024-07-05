// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#e3f2f9',
      100: '#c5e4f3',
      200: '#a2d4ec',
      300: '#7ac1e4',
      400: '#47a9da',
      500: '#0088cc',
      600: '#007ab8',
      700: '#006ba1',
      800: '#005885',
      900: '#003f5e',
    },
    secondary: {
      50: '#f2fdf3',
      100: '#e6f7e8',
      200: '#ccebd1',
      300: '#aadbb0',
      400: '#7bcf87',
      500: '#51b95e',
      600: '#3da94a',
      700: '#2a8a36',
      800: '#1a6b24',
      900: '#0d4d13',
    },
    background: {
      light: '#f7fafc',
      dark: '#1a202c',
    },
    text: {
      light: '#2d3748',
      dark: '#f7fafc',
    },
    accent: {
      50: '#ffe3ec',
      100: '#ffb8d2',
      200: '#ff8cba',
      300: '#f364a2',
      400: '#e8368f',
      500: '#da127d',
      600: '#a30664',
      700: '#870557',
      800: '#620042',
      900: '#440029',
    },
  },
});

export default theme;
