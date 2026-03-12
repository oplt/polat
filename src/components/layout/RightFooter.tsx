import { Box, Typography, alpha, useTheme } from '@mui/material';

export default function RightFooter() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 16,
        pt: 6,
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.4)}`,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { sm: 'center' },
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem', lineHeight: 1.6 }}>
        © {new Date().getFullYear()} Özgür Polat. Designed & built with React, TypeScript, and MUI.
      </Typography>


    </Box>
  );
}
