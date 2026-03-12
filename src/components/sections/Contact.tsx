import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Typography, TextField, Button, Grid, Alert, Snackbar, alpha, useTheme, Link, CircularProgress } from '@mui/material';
import type { Theme } from '@mui/material';
import { Send, Email, GitHub, LinkedIn } from '@mui/icons-material';
import RightSection from '../ui/RightSection';
import AnimatedSection from '../ui/AnimatedSection';

function fieldSx(theme: Theme) {
  return {
    '& .MuiOutlinedInput-root': {
      bgcolor: alpha(theme.palette.background.default, 0.5),
      fontSize: '0.875rem',
      '& fieldset': { borderColor: alpha(theme.palette.divider, 0.5) },
      '&:hover fieldset': { borderColor: alpha(theme.palette.primary.main, 0.4) },
      '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main },
    },
    '& .MuiInputLabel-root': { fontSize: '0.875rem' },
    '& .MuiInputLabel-root.Mui-focused': { color: theme.palette.primary.main },
  };
}

export default function Contact() {
  const theme = useTheme();
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState<{ open: boolean, type: 'success' | 'error' }>({ open: false, type: 'success' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    const formData = new FormData(form.current);

    const ownerParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      to_email: 'polatozgur111@gmail.com',
      reply_to: formData.get('email'),
    };

    const autoReplyParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      to_email: formData.get('email'),
    };

    try {
      // 1) Notification to you
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID,
        ownerParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 2) Auto-reply to the user
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        autoReplyParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSnack({ open: true, type: 'success' });
      form.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setSnack({ open: true, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <RightSection id="contact" label="Contact">
      <Box sx={{ maxWidth: 600 }}>


        {/* Contact links */}
        <Box sx={{ display: 'flex', gap: 3, mb: 5, }}>
          {[
            { icon: <Email sx={{ fontSize: 15 }} />, label: 'polatozgur111@gmail.com', href: 'mailto:polatozgur111@gmail.com' },
            { icon: <GitHub sx={{ fontSize: 15 }} />, label: 'github.com/oplt', href: 'https://github.com/oplt' },
            { icon: <LinkedIn sx={{ fontSize: 15 }} />, label: 'linkedin.com/in/oplt', href: 'https://linkedin.com/in/oplt' },
          ].map(({ icon, label, href }) => (
            <Link key={label} href={href} target="_blank" underline="none"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: 'text.secondary', fontSize: '1.25rem', fontFamily: '"Syne", sans-serif', fontWeight: 500,
                '&:hover': { color: 'primary.main' }, transition: 'color 0.2s' }}>
              {icon}{label}
            </Link>
          ))}
        </Box>

        {/* Form */}
        <AnimatedSection>
          <Box ref={form} component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Name" name="name" required size="small" sx={fieldSx(theme)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email" name="email" type="email" required size="small" sx={fieldSx(theme)} />
              </Grid>
            </Grid>
            <TextField fullWidth label="Subject" name="subject" required size="small" sx={fieldSx(theme)} />
            <TextField fullWidth label="Message" name="message" required multiline rows={4} sx={fieldSx(theme)} />
            <Box sx={{ position: 'relative' }}>
              <Button type="submit" variant="contained" color="primary" endIcon={<Send sx={{ fontSize: '0.9rem !important' }} />}
                sx={{ fontFamily: '"Syne", sans-serif', fontWeight: 700, fontSize: '1.25rem', px: 3 }} disabled={loading}>
                Send Message
              </Button>
              {loading && <CircularProgress size={24} sx={{ position: 'absolute', top: '50%', left: '50%', mt: '-12px', ml: '-12px' }} />}
            </Box>
          </Box>
        </AnimatedSection>
      </Box>

      <Snackbar open={snack.open} autoHideDuration={5000} onClose={() => setSnack(p => ({ ...p, open: false }))} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity={snack.type} onClose={() => setSnack(p => ({ ...p, open: false }))}>
          {snack.type === 'success' ? 'Message sent! I\'ll get back to you soon.' : 'Something went wrong. Please try again.'}
        </Alert>
      </Snackbar>
    </RightSection>
  );
}