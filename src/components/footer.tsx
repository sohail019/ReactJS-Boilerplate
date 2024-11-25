import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, GitHub } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'background.paper', borderTop: 1, borderColor: 'divider' }}
    >
      <Box sx={{ maxWidth: 1200, margin: '0 auto', padding: { xs: 2, sm: 4 }, py: 6 }}>
        <Grid container spacing={4} direction="row" justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Link component="div" sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ '&:hover': { color: 'primary.main'} }}
              >
                Logo
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Resources
            </Typography>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ '&:hover': { color: 'primary.main' } }}
                  >
                    Home
                  </Typography>
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/about" style={{ textDecoration: 'none' }}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ '&:hover': { color: 'primary.main' } }}
                  >
                    About
                  </Typography>
                </NavLink>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                component="a"
                href="https://github.com/sohail019"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <Twitter />
              </IconButton>
              <IconButton
                component="a"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <Facebook />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: 1, borderColor: 'divider', mt: 6, pt: 4 }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                © 2024
                <Link href="#" color="inherit" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                  Sohail Shaikh
                </Link>
                . All Rights Reserved.
              </Typography>
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Link href="#" color="inherit" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                  Privacy Policy
                </Link>
                <Link href="#" color="inherit" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                  Terms & Conditions
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
