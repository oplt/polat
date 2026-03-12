import { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Button, IconButton, Tooltip,
  Drawer, List, ListItemButton, ListItemText, Divider,
  useScrollTrigger, alpha, useTheme,
} from '@mui/material';
import {
  LightMode, DarkMode, Menu as MenuIcon, Close, GitHub, LinkedIn,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  mode: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Navbar({ mode, onToggleTheme }: NavbarProps) {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          background: scrolled
            ? alpha(theme.palette.background.default, 0.85)
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? `1px solid ${alpha(theme.palette.divider, 0.8)}`
            : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ maxWidth: 1280, mx: 'auto', width: '100%', px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            sx={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 800,
              fontSize: '1.2rem',
              cursor: 'pointer',
              color: 'primary.main',
              letterSpacing: '-0.02em',
              mr: 'auto',
              '&:hover': { opacity: 0.8 },
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ÖP
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <Button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  sx={{
                    color: isActive ? 'primary.main' : 'text.secondary',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 600 : 400,
                    px: 1.5,
                    py: 1,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: isActive ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                      width: '80%',
                      height: '2px',
                      background: 'primary.main',
                      bgcolor: 'primary.main',
                      borderRadius: '2px',
                      transition: 'transform 0.2s ease',
                    },
                    '&:hover': { color: 'text.primary', bgcolor: 'transparent' },
                    '&:hover::after': { transform: 'translateX(-50%) scaleX(1)' },
                    transition: 'color 0.2s ease',
                  }}
                >
                  {link.label}
                </Button>
              );
            })}

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 1 }}>
              <Tooltip title="GitHub">
                <IconButton
                  component="a"
                  href="https://github.com/oplt"
                  target="_blank"
                  size="small"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
                >
                  <GitHub fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <IconButton
                  component="a"
                  href="https://linkedin.com/in/oplt"
                  target="_blank"
                  size="small"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
                >
                  <LinkedIn fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'}>
                <IconButton
                  onClick={onToggleTheme}
                  size="small"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  {mode === 'dark' ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          {/* Mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'}>
              <IconButton onClick={onToggleTheme} size="small" sx={{ color: 'text.secondary' }}>
                {mode === 'dark' ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
              </IconButton>
            </Tooltip>
            <IconButton onClick={() => setMobileOpen(true)} sx={{ color: 'text.primary' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: 'background.paper',
            borderLeft: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, color: 'primary.main', fontSize: '1.2rem' }}>
            ÖP
          </Box>
          <IconButton onClick={() => setMobileOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {NAV_LINKS.map((link) => (
            <ListItemButton key={link.href} onClick={() => scrollTo(link.href)}>
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                }}
              />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 2, display: 'flex', gap: 1 }}>
          <IconButton
            component="a"
            href="https://github.com/oplt"
            target="_blank"
            sx={{ color: 'text.secondary' }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/oplt"
            target="_blank"
            sx={{ color: 'text.secondary' }}
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
}
