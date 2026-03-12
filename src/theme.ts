import { createTheme, alpha } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00D4AA',
      light: '#33DDBB',
      dark: '#00A882',
      contrastText: '#0A0F1E',
    },
    secondary: {
      main: '#6C63FF',
      light: '#8F88FF',
      dark: '#4A42CC',
    },
    accent: {
      main: '#FF6B6B',
    },
    background: {
      default: '#080C18',
      paper: '#0E1525',
    },
    text: {
      primary: '#EDF2F7',
      secondary: '#8892A4',
    },
    divider: alpha('#8892A4', 0.12),
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.75,
      letterSpacing: '0.01em',
    },
    body2: {
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    button: {
      fontFamily: '"Syne", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '0.9rem',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #00D4AA 0%, #00A882 100%)',
          boxShadow: '0 4px 24px rgba(0, 212, 170, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #33DDBB 0%, #00D4AA 100%)',
            boxShadow: '0 6px 32px rgba(0, 212, 170, 0.45)',
            transform: 'translateY(-1px)',
          },
          transition: 'all 0.25s ease',
        },
        outlinedPrimary: {
          borderColor: alpha('#00D4AA', 0.5),
          '&:hover': {
            borderColor: '#00D4AA',
            background: alpha('#00D4AA', 0.08),
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Syne", sans-serif',
          fontWeight: 600,
          fontSize: '0.72rem',
          letterSpacing: '0.04em',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: `1px solid ${alpha('#8892A4', 0.12)}`,
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: alpha('#8892A4', 0.12),
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00A882',
      light: '#00D4AA',
      dark: '#007D63',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6C63FF',
    },
    background: {
      default: '#F7F9FC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0E1525',
      secondary: '#4A5568',
    },
  },
  typography: darkTheme.typography,
  shape: darkTheme.shape,
  components: {
    ...darkTheme.components,
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '0.9rem',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #00D4AA 0%, #007D63 100%)',
          boxShadow: '0 4px 24px rgba(0, 168, 130, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 32px rgba(0, 168, 130, 0.45)',
            transform: 'translateY(-1px)',
          },
          transition: 'all 0.25s ease',
        },
      },
    },
  },
});
