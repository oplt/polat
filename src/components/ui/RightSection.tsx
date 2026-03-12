import { type ReactNode, useRef } from 'react';
import { Box, Typography, alpha, useTheme } from '@mui/material';
import { motion, useInView } from 'framer-motion';

interface RightSectionProps {
  id: string;
  label: string;
  children: ReactNode;
}

export default function RightSection({ id, label, children }: RightSectionProps) {
  const theme = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <Box
      component="section"
      id={id}
      ref={ref}
      sx={{
        py: { xs: 8, lg: 10 },
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.35)}`,
        '&:first-of-type': { borderTop: 'none', pt: { xs: 2, lg: 8 } },
        scrollMarginTop: 24,
      }}
    >
      {/* Sticky section label — visible only on desktop at top on scroll */}
      <Box
        sx={{
          display: { xs: 'flex', lg: 'none' },
          alignItems: 'center',
          gap: 2,
          mb: 5,
        }}
      >
        <Box sx={{ height: '1px', width: 40, bgcolor: alpha(theme.palette.common.white, 0.45) }} />
        <Typography
          variant="overline"
          sx={{
            fontFamily: '"Syne", sans-serif',
            fontWeight: 700,
            fontSize: '0.95rem',
            letterSpacing: '0.08em',
            color: theme.palette.common.white,
          }}
        >
          {label}
        </Typography>
      </Box>

      {/* Desktop sticky label floated top-left */}
      <Box
        sx={{
          display: { xs: 'none', lg: 'flex' },
          position: 'sticky',
          top: 0,
          zIndex: 10,
          mb: -5,
          pt: 0,
          pb: 5,
          bgcolor: 'transparent',
          width: '100%',
          pointerEvents: 'none',
        }}
      >
        <Typography
          variant="overline"
          sx={{
            fontFamily: '"Syne", sans-serif',
            fontWeight: 700,
            fontSize: '0.95rem',
            letterSpacing: '0.08em',
            color: theme.palette.common.white,
          }}
        >
          {label}
        </Typography>
      </Box>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </Box>
  );
}
