import { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import LeftPanel from './components/layout/LeftPanel';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import RightFooter from './components/layout/RightFooter';

export default function App() {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');
  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          backgroundImage: mode === 'dark'
            ? `radial-gradient(ellipse 70% 60% at 20% 30%, rgba(0,212,170,0.05) 0%, transparent 60%),
               radial-gradient(ellipse 50% 50% at 80% 80%, rgba(108,99,255,0.05) 0%, transparent 55%)`
            : 'none',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          maxWidth: 1500,
          mx: 'auto',
          px: { xs: 2, sm: 4, md: 6, lg: 0 },
        }}
      >
        {/* LEFT — sticky panel */}
        <Box
          sx={{
            width: { xs: '100%', lg: 525 },
            flexShrink: 0,
            position: { lg: 'sticky' },
            top: { lg: 0 },
            height: { lg: '100vh' },
            overflowY: { lg: 'auto' },
            display: 'flex',
            flexDirection: 'column',
            pt: { xs: 10, lg: 0 },
            pl: { lg: 6 },
            pr: { lg: 3 },
          }}
        >
          <LeftPanel mode={mode} onToggleTheme={() => setMode(m => m === 'dark' ? 'light' : 'dark')} />
        </Box>

        {/* RIGHT — scrollable content */}
        <Box
          id="right-panel"
          component="main"
          sx={{
            flex: 1,
            minWidth: 0,
            pt: { xs: 2, lg: 0 },
            pb: 16,
            pl: { lg: 6 },
            pr: { lg: 6 },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
          <RightFooter />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
