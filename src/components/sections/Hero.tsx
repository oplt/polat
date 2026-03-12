import { Box, Container, Typography, Button, IconButton, Tooltip, Chip, alpha, useTheme } from '@mui/material';
import { GitHub, LinkedIn, KeyboardArrowDown, Download, Visibility } from '@mui/icons-material';
import { motion } from 'framer-motion';

const techStrip = ['Python','FastAPI','PostgreSQL','Docker','LLM Integration','Pandas','Odoo','CI/CD','SQLAlchemy','REST APIs'];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay, type: 'tween' }}>
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const theme = useTheme();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Box component="section" id="hero" sx={{ minHeight: { xs: '100vh', md: '92vh' }, display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', pt: { xs: 8, md: 4 } }}>
      <Box sx={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${alpha(theme.palette.primary.main, 0.04)} 1px, transparent 1px), linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.04)} 1px, transparent 1px)`, backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', top: '10%', right: '-5%', width: 480, height: 480, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`, filter: 'blur(40px)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: '5%', left: '-10%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.08)} 0%, transparent 70%)`, filter: 'blur(40px)', pointerEvents: 'none' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 820 }}>
          <FadeUp delay={0}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 0.75, borderRadius: 20, border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`, bgcolor: alpha(theme.palette.primary.main, 0.06), fontSize: '0.78rem', fontFamily: '"Syne", sans-serif', fontWeight: 600, color: 'primary.main', letterSpacing: '0.05em' }}>
                <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: 'primary.main', boxShadow: `0 0 8px ${theme.palette.primary.main}`, animation: 'pulse 2s ease-in-out infinite', '@keyframes pulse': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.4 } } }} />
                Open to new opportunities
              </Box>
            </Box>
          </FadeUp>

          <FadeUp >
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem' }, fontWeight: 800, lineHeight: 1.0, mb: 2, letterSpacing: '-0.03em' }}>
              Özgür<Box component="span" sx={{ color: 'primary.main' }}> Polat</Box>
            </Typography>
          </FadeUp>



          <FadeUp delay={0.48}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 5 }}>
              <Button variant="contained" color="primary" size="large" startIcon={<Visibility />} onClick={() => scrollTo('projects')} sx={{ fontFamily: '"Syne", sans-serif' }}>View Projects</Button>
              <Button variant="outlined" color="primary" size="large" onClick={() => scrollTo('contact')} sx={{ fontFamily: '"Syne", sans-serif' }}>Contact Me</Button>
              <Button variant="text" size="large" startIcon={<Download />} component="a" href="/resume.pdf" download sx={{ color: 'text.secondary', fontFamily: '"Syne", sans-serif', '&:hover': { color: 'text.primary' } }}>Download CV</Button>
            </Box>
          </FadeUp>

          <FadeUp delay={0.6}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Tooltip title="GitHub — github.com/oplt">
                <IconButton component="a" href="https://github.com/oplt" target="_blank" sx={{ color: 'text.secondary', border: `1px solid ${alpha(theme.palette.divider, 0.6)}`, '&:hover': { color: 'text.primary', borderColor: alpha(theme.palette.primary.main, 0.5), bgcolor: alpha(theme.palette.primary.main, 0.06) }, transition: 'all 0.2s' }}><GitHub /></IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn — linkedin.com/in/oplt">
                <IconButton component="a" href="https://linkedin.com/in/oplt" target="_blank" sx={{ color: 'text.secondary', border: `1px solid ${alpha(theme.palette.divider, 0.6)}`, '&:hover': { color: 'text.primary', borderColor: alpha(theme.palette.primary.main, 0.5), bgcolor: alpha(theme.palette.primary.main, 0.06) }, transition: 'all 0.2s' }}><LinkedIn /></IconButton>
              </Tooltip>
              <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>Based in Belgium</Typography>
            </Box>
          </FadeUp>
        </Box>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6, type: 'tween' }}>
          <Box sx={{ mt: { xs: 6, md: 8 }, pt: { xs: 4, md: 5 }, borderTop: `1px solid ${alpha(theme.palette.divider, 0.5)}` }}>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2, fontFamily: '"Syne", sans-serif', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.68rem' }}>Core Stack</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {techStrip.map((tech) => (
                <Chip key={tech} label={tech} size="small" sx={{ bgcolor: alpha(theme.palette.primary.main, 0.07), color: alpha(theme.palette.primary.main, 0.85), border: `1px solid ${alpha(theme.palette.primary.main, 0.18)}`, fontFamily: '"Syne", sans-serif', fontWeight: 600, fontSize: '0.72rem' }} />
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, type: 'tween' }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'pointer', opacity: 0.4 }}
        onClick={() => scrollTo('about')}>
        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>SCROLL</Typography>
        <KeyboardArrowDown sx={{ color: 'text.secondary', fontSize: 20 }} />
      </motion.div>
    </Box>
  );
}
