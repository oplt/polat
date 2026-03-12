import { Box, Typography, Chip, IconButton, Tooltip, alpha, useTheme, Link } from '@mui/material';
import { GitHub, OpenInNew } from '@mui/icons-material';
import RightSection from '../ui/RightSection';
import AnimatedSection from '../ui/AnimatedSection';
import { projects } from '../../data/projects';

export default function Projects() {
  const theme = useTheme();
  return (
    <RightSection id="projects" label="Projects">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {projects.map((project, i) => {
          return (
            <AnimatedSection key={project.id} delay={i * 0.07}>
              <Box
                sx={{
                  py: 3.5,
                  px: 2.5,
                  mx: -2.5,
                  borderRadius: 2,
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                  '&:hover': {
                    bgcolor: alpha(theme.palette.background.paper, 0.6),
                    '& .proj-title': { color: 'primary.main' },
                  },
                }}
              >
                {/* Content */}
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 1, mb: 2 }}>
                    <Typography
                      className="proj-title"
                      variant="subtitle2"
                      sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 700, fontSize: '1.25rem', transition: 'color 0.2s' }}
                    >
                      {project.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.25, flexShrink: 0 }}>
                      {project.github && (
                        <Tooltip title="View Code">
                          <IconButton component="a" href={project.github} target="_blank" size="small"
                            sx={{ color: 'text.secondary', p: 0.5, '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }}>
                            <GitHub sx={{ fontSize: 30 }} />
                          </IconButton>
                        </Tooltip>
                      )}
                      {project.demo && (
                        <Tooltip title="Live Demo">
                          <IconButton component="a" href={project.demo} target="_blank" size="small"
                            sx={{ color: 'text.secondary', p: 0.5, '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }}>
                            <OpenInNew sx={{ fontSize: 20 }} />
                          </IconButton>
                        </Tooltip>
                      )}
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 2 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                      <Box component="span" sx={{ fontWeight: 700, color: 'text.primary', display: 'block', mb: 0.25, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8 }}>
                        Summary
                      </Box>
                      {project.summary}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                      <Box component="span" sx={{ fontWeight: 700, color: 'text.primary', display: 'block', mb: 0.25, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8 }}>
                        Features
                      </Box>
                      {project.features}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                      <Box component="span" sx={{ fontWeight: 700, color: 'text.primary', display: 'block', mb: 0.25, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8 }}>
                        Technical Highlights
                      </Box>
                      {project.tech}
                    </Typography>
                  </Box>

                  {project.tags && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6 }}>
                      {project.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small"
                          sx={{ bgcolor: alpha(theme.palette.primary.main, 0.07), color: alpha(theme.palette.primary.main, 0.8), border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`, fontSize: '0.67rem', fontWeight: 600, height: 20 }}
                        />
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>

              {i < projects.length - 1 && (
                <Box sx={{ height: '1px', bgcolor: alpha(theme.palette.divider, 0.2), mx: 2.5 }} />
              )}
            </AnimatedSection>
          );
        })}

        {/* GitHub CTA */}
        <Box sx={{ mt: 3, px: 2.5 }}>
          <Link
            href="https://github.com/oplt"
            target="_blank"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.75,
              color: 'primary.main',
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: '0.82rem',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              '&:hover': { gap: 1.25 },
              transition: 'gap 0.2s',
            }}
          >
            <GitHub sx={{ fontSize: 15 }} />
            View all projects on GitHub
          </Link>
        </Box>
      </Box>
    </RightSection>
  );
}
