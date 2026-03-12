import { Box, Typography, Chip, Grid, Paper, alpha, useTheme } from '@mui/material';
import RightSection from '../ui/RightSection';
import AnimatedSection from '../ui/AnimatedSection';
import { Code, Analytics, Psychology, BarChart, Storage, Terminal, Web, Translate } from '@mui/icons-material';
import { skillGroups } from '../../data/skills';


const iconMap: Record<string, React.ReactNode> = {
  code: <Code sx={{ fontSize: 16 }} />,
  analytics: <Analytics sx={{ fontSize: 16 }} />,
  psychology: <Psychology sx={{ fontSize: 16 }} />,
  bar_chart: <BarChart sx={{ fontSize: 16 }} />,
  storage: <Storage sx={{ fontSize: 16 }} />,
  terminal: <Terminal sx={{ fontSize: 16 }} />,
  web: <Web sx={{ fontSize: 16 }} />,
  translate: <Translate sx={{ fontSize: 16 }} />,
};

export default function About() {
  const theme = useTheme();
  return (
    <RightSection id="about" label="About">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85, fontSize: '1.25rem' }}>
          I’m a software developer focused on building scalable back-end systems, secure APIs, and practical digital solutions.
          I work mainly with Python, PostgreSQL, Odoo, FastAPI, and modern development workflows such as Docker and CI/CD to turn complex requirements into reliable,
           maintainable products.
           My experience spans business applications, data-driven systems, and AI-powered tools including RAG, with projects ranging from drone telemetry platforms to
           voice-based scheduling assistants and intelligent analytics solutions.
           I’m especially motivated by building software that is robust, efficient, and genuinely useful for people and organizations.
        </Typography>
        <Grid container spacing={2}>
                {skillGroups.map((group, i) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={group.id}>
                    <AnimatedSection delay={i * 0.05}>
                      <Paper
                        sx={{
                          p: 2.5,
                          bgcolor: alpha(theme.palette.background.paper, 0.5),
                          border: `1px solid ${alpha(theme.palette.divider, 0.4)}`,
                          borderRadius: 1,
                          transition: 'all 0.25s ease',
                          '&:hover': {
                            borderColor: alpha(theme.palette.primary.main, 0.3),
                            bgcolor: alpha(theme.palette.background.paper, 0.8),
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.75 }}>
                          <Box sx={{ color: 'primary.main', display: 'flex' }}>{iconMap[group.icon]}</Box>
                          <Typography variant="caption" sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.05em', color: 'text.primary' }}>
                            {group.label}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6 }}>
                          {group.skills.map((skill) => (
                            <Chip
                              key={skill}
                              label={skill}
                              size="small"
                              sx={{
                                bgcolor: alpha(theme.palette.primary.main, 0.07),
                                color: alpha(theme.palette.primary.main, 0.85),
                                border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                                fontSize: '0.85rem',
                                fontWeight: 500,
                                height: 22,
                              }}
                            />
                          ))}
                        </Box>
                      </Paper>
                    </AnimatedSection>
                  </Grid>
                ))}
              </Grid>




      </Box>
    </RightSection>
  );
}
