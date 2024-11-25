import { Box, Grid, Typography, TextField, Button, IconButton } from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material';
export default function Contact() {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Box sx={{ mx: 'auto', px: { xs: 2, sm: 4, md: 6 }, color: 'text.primary'  }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Side: Contact Info */}
          <Grid item xs={12} md={5}>
            <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                Get in touch:
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
                Fill in the form to start a conversation
              </Typography>

              {/* Contact Details */}
              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <IconButton color="primary" sx={{ p: 1 }}>
                    <LocationOn />
                  </IconButton>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    Mumbai, Maharashtra
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <IconButton color="primary" sx={{ p: 1 }}>
                    <Phone />
                  </IconButton>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    +91 9876543210
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <IconButton color="primary" sx={{ p: 1 }}>
                    <Email />
                  </IconButton>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    info@sohail.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Side: Contact Form */}
          <Grid item xs={12} md={7}>
            <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
              <form>
                <TextField label="Full Name" variant="outlined" fullWidth sx={{ mb: 2 }} required />
                <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} required />
                <TextField
                  label="Telephone Number"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, width: '100%' }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
