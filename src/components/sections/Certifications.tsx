import { Box, Typography, Chip, alpha, useTheme, Link } from "@mui/material";
import { WorkspacePremium, OpenInNew } from '@mui/icons-material';
import RightSection from '../ui/RightSection';
import AnimatedSection from '../ui/AnimatedSection';
import { certifications } from '../../data/certifications';

const categoryConfig: Record<string, { label: string; color: string }> = {
  'data-science': { label: 'Data Science', color: '#6C63FF' },
  python: { label: 'Python', color: '#00D4AA' },
  sql: { label: 'SQL', color: '#4ECDC4' },
  bi: { label: 'BI', color: '#FF8C42' },
  cloud: { label: 'Cloud', color: '#4A9EFF' },
  devops: { label: 'DevOps', color: '#FF6B6B' },
};

export default function Certifications() {
  const theme = useTheme();
  return (
    <RightSection id="certifications" label="Certifications">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {certifications.map((cert, i) => {
          const config = categoryConfig[cert.category];
          return (
            <AnimatedSection key={cert.id} delay={i * 0.05}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '120px 1fr' },
                  gap: { xs: 0.5, sm: 3 },
                  py: .5,
                  px: .5,
                  mx: -2.5,
                  borderRadius: 2,
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                  '&:hover': { bgcolor: alpha(theme.palette.background.paper, 0.55) },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, pt: { sm: 0.2 } }}>
                  <WorkspacePremium sx={{ fontSize: 14, color: '#00D4AA', mt: 0.1, flexShrink: 0 }} />
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.7rem', fontFamily: '"Syne", sans-serif', fontWeight: 500 }}>
                    {cert.date}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', columnGap: 1.5, rowGap: 0 }}>
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      color: 'text.primary',
                      '&:hover': {
                        color: '#00D4AA',
                        '& .MuiSvgIcon-root': {
                          opacity: 1,
                          transform: 'translateX(2px)',
                        },
                      },
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '1.25rem', lineHeight: 1.4 }}>
                      {cert.title}
                    </Typography>
                    <OpenInNew sx={{
                      fontSize: '0.9rem',
                      opacity: 0.5,
                      transition: 'all 0.2s ease',
                      color: 'inherit',
                    }} />
                  </Link>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '1.25rem' }}>
                    {cert.issuer}
                  </Typography>
                  <Chip label={config.label} size="small" sx={{ color: '#00D4AA', fontSize: '0.62rem', fontWeight: 700, height: 16 }} />
                </Box>
              </Box>
              {i < certifications.length - 1 && (
                <Box sx={{ height: '1px', bgcolor: alpha(theme.palette.divider, 0.2), mx: 2.5 }} />
              )}
            </AnimatedSection>
          );
        })}

        {/* Education */}
        <Box sx={{ mt: 2, pt: 2, borderTop: `1px solid ${alpha(theme.palette.divider, 0.3)}` }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.common.white,
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              letterSpacing: '0.08em',
              fontSize: '0.95rem',
              display: 'block',
              mb: 0.5,
            }}
          >
            Education
          </Typography>
          {[
            { degree: 'PhD in Economics', uni: 'Atatürk University', period: '2005–2009', note: 'Thesis: Comparative Analysis of Artificial Neural Networks and Box-Jenkins Models' },
            { degree: "Bachelor's in Business Administration", uni: 'Uludağ University', period: '2000–2004', note: '' },
          ].map((edu) => (
            <Box key={edu.degree} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '120px 1fr' }, gap: { xs: 0.5, sm: 3 }, py:1, px: 2.5, mx: -2.5, borderRadius: 2, '&:hover': { bgcolor: alpha(theme.palette.background.paper, 0.55) }, transition: 'all 0.25s' }}>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.7rem', fontFamily: '"Syne", sans-serif', fontWeight: 500, pt: { sm: 0.2 } }}>{edu.period}</Typography>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 0.25 }}>{edu.degree}</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '1.25rem', display: 'block' }}>{edu.uni}</Typography>
                {edu.note && <Typography variant="caption" color="text.secondary" sx={{ fontSize: '1.25rem', fontStyle: 'italic', display: 'block', mt: 0.5 }}>{edu.note}</Typography>}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </RightSection>
  );
}
