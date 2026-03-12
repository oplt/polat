import { useState, useEffect } from 'react';
import {
  Box, Typography, IconButton, Tooltip, alpha, useTheme,
} from '@mui/material';
import {
  GitHub, LinkedIn, LightMode, DarkMode, Email, Download,
} from '@mui/icons-material';

const NAV_ITEMS = [
  { id: 'about',          label: 'About' },
  { id: 'experience',     label: 'Experience' },
  { id: 'projects',       label: 'Projects' },
  { id: 'certifications', label: 'Education' },
  { id: 'contact',        label: 'Contact' },
];

interface LeftPanelProps {
  mode: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function LeftPanel({ mode, onToggleTheme }: LeftPanelProps) {
  const theme = useTheme();
  const [active, setActive] = useState('about');

  // Scroll spy — observe sections in the RIGHT panel
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { root: null, rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    // On desktop the whole page scrolls, on mobile too
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  return (
    <Box
      sx={{
        height: { lg: '100vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { lg: 'space-between' },
        py: { xs: 0, lg: 8 },
        gap: { xs: 5, lg: 0 },
      }}
    >
      {/* TOP — name + role + tagline */}
      <Box>
        <Box sx={{ mb: 1.5 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.6rem', lg: '3rem' },
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              cursor: 'pointer',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Özgür
            <Box component="br" />
            <Box component="span" sx={{ color: 'primary.main' }}>Polat</Box>
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.75, maxWidth: 500, fontSize: '1.25rem' }}
        >
          Software developer specializing in data-driven backend systems and AI-powered business automation.
        </Typography>
      </Box>

      {/* MIDDLE — nav */}
      <Box
        component="nav"
        sx={{ display: { xs: 'none', lg: 'block' } }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <Box
                key={id}
                onClick={() => scrollTo(id)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  cursor: 'pointer',
                  py: 0.75,
                  px: 0,
                  userSelect: 'none',
                  '&:hover .nav-line': {
                    width: 48,
                    bgcolor: 'text.primary',
                  },
                  '&:hover .nav-label': {
                    color: 'text.primary',
                  },
                }}
              >
                {/* Line indicator */}
                <Box
                  className="nav-line"
                  sx={{
                    height: '1px',
                    width: isActive ? 48 : 24,
                    bgcolor: isActive ? 'primary.main' : alpha(theme.palette.text.secondary, 0.4),
                    transition: 'all 0.25s ease',
                    flexShrink: 0,
                  }}
                />
                <Typography
                  className="nav-label"
                  variant="overline"
                  sx={{
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    color: isActive ? 'primary.main' : alpha(theme.palette.text.secondary, 0.7),
                    transition: 'color 0.2s ease',
                  }}
                >
                  {label}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* BOTTOM — socials + theme toggle */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, flexWrap: 'wrap' }}>
        <Tooltip title="GitHub">
          <IconButton
            component="a"
            href="https://github.com/oplt"
            target="_blank"
            size="small"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
              transition: 'all 0.2s',
            }}
          >
            <GitHub sx={{ fontSize: 30 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn">
          <IconButton
            component="a"
            href="https://linkedin.com/in/oplt"
            target="_blank"
            size="small"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
              transition: 'all 0.2s',
            }}
          >
            <LinkedIn sx={{ fontSize: 30 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Email">
          <IconButton
            component="a"
            href="mailto:polatozgur111@gmail.com"
            size="small"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
              transition: 'all 0.2s',
            }}
          >
            <Email sx={{ fontSize: 30 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Download CV">
          <IconButton
            component="a"
            href="/src/data/OzgurPolat_Resume.pdf"
            download
            size="small"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
              transition: 'all 0.2s',
            }}
          >
            <Download sx={{ fontSize: 30 }} />
          </IconButton>
        </Tooltip>

        {/* Divider */}
        <Box sx={{ width: '1px', height: 18, bgcolor: alpha(theme.palette.divider, 0.6), mx: 0.5 }} />

        <Tooltip title={mode === 'dark' ? 'Switch to light' : 'Switch to dark'}>
          <IconButton
            onClick={onToggleTheme}
            size="small"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'primary.main' },
              transition: 'color 0.2s',
            }}
          >
            {mode === 'dark'
              ? <LightMode sx={{ fontSize: 19 }} />
              : <DarkMode sx={{ fontSize: 19 }} />}
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
