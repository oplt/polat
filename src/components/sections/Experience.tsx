import { Box, Typography, Chip, alpha, useTheme } from '@mui/material';
import RightSection from '../ui/RightSection';
import AnimatedSection from '../ui/AnimatedSection';
import { experiences } from '../../data/experience';


export default function Experience() {
  const theme = useTheme();
  return (
    <RightSection id="experience" label="Experience">
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {experiences.map((exp, i) => (
          <AnimatedSection key={exp.id} delay={i * 0.08}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '120px 1fr' },
                gap: { xs: 1, sm: 3 },
                py: 3.5,
                px: 2.5,
                mx: -2.5,
                borderRadius: 2,
                transition: 'all 0.25s ease',
                cursor: 'default',
                '&:hover': {
                  bgcolor: alpha(theme.palette.background.paper, 0.6),
                  '& .exp-title': { color: 'primary.main' },
                },
              }}
            >
              {/* Date column */}
              <Typography
                variant="caption"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.25rem',
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 500,
                  pt: { sm: 0.25 },
                  letterSpacing: '0.02em',
                  whiteSpace: 'nowrap',
                }}
              >
                {exp.period.split(' – ')[0].split(' ').pop()}{' '}
                {exp.period.includes('–') && (
                  <>— {exp.period.split(' – ')[1]?.split(' ').pop() ?? 'Present'}</>
                )}
              </Typography>

              {/* Content column */}
              <Box>
                <Typography
                  className="exp-title"
                  variant="subtitle2"
                  sx={{
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    mb: 0.25,
                    transition: 'color 0.2s',
                  }}
                >
                  {exp.role}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#00D4AA',
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    display: 'block',
                    mb: 1.25,
                  }}
                >
                  {exp.company} · {exp.location}
                </Typography>

                {exp.highlights.map((h, j) => (
                  <Typography
                    key={j}
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: '1.25rem', lineHeight: 1.7, mb: 0.5 }}
                  >
                    • {h}
                  </Typography>
                ))}

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6, mt: 1.5 }}>
                  {exp.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.07),
                        color: alpha(theme.palette.primary.main, 0.8),
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                        fontSize: '0.67rem',
                        fontWeight: 600,
                        height: 20,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Separator */}
            {i < experiences.length - 1 && (
              <Box sx={{ height: '1px', bgcolor: alpha(theme.palette.divider, 0.25), mx: 2.5 }} />
            )}
          </AnimatedSection>
        ))}
      </Box>
    </RightSection>
  );
}
