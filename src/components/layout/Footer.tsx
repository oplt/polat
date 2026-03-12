import { Box, Container, Typography, IconButton, Divider, Tooltip, alpha, useTheme } from '@mui/material';
import { GitHub, LinkedIn, KeyboardArrowUp, Email } from '@mui/icons-material';

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 500 }}
          >
            © {new Date().getFullYear()} Özgür Polat. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Tooltip title="Email">
              <IconButton
                component="a"
                href="mailto:polatozgur111@gmail.com"
                size="small"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.2s',
                }}
              >
                <Email fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <IconButton
                component="a"
                href="https://github.com/oplt"
                target="_blank"
                size="small"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.2s',
                }}
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
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.2s',
                }}
              >
                <LinkedIn fontSize="small" />
              </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem sx={{ mx: 1, opacity: 0.4 }} />
            <Tooltip title="Back to top">
              <IconButton
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                size="small"
                sx={{
                  color: 'text.secondary',
                  border: `1px solid ${alpha(theme.palette.divider, 0.6)}`,
                  '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
                  transition: 'all 0.2s',
                }}
              >
                <KeyboardArrowUp fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
