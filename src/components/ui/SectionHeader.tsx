import { Box, Typography, alpha, useTheme } from '@mui/material';

interface SectionHeaderProps {
  label: string;
}

export default function SectionHeader({ label }: SectionHeaderProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: { xs: 'flex', lg: 'none' },
        alignItems: 'center',
        gap: 2,
        mb: 5,
        pt: 1,
      }}
    >
      <Box sx={{ height: '1px', width: 40, bgcolor: alpha(theme.palette.primary.main, 0.5) }} />
      <Typography
        variant="overline"
        sx={{
          fontFamily: '"Syne", sans-serif',
          fontWeight: 700,
          fontSize: '0.7rem',
          letterSpacing: '0.14em',
          color: 'primary.main',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
