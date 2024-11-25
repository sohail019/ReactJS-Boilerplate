import { Box, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { navigateToErrorPage } from '../utils/navigate-to-errorpage';
export default function About() {
  const navigate = useNavigate();

  const userHasAccess = false;

   useEffect(() => {
     if (!userHasAccess) {
       navigateToErrorPage(navigate, 403);
     }
   }, [userHasAccess, navigate]);
  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ mx: 'auto', px: { xs: 2, sm: 4, md: 6 }, color: 'text.primary' }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <img
              src="https://avatars.githubusercontent.com/u/69633245?v=4"
              alt="React development"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              Hi, I'm Sohail Shaikh, a React Developer at Digital Salt
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
              My name is Sohail Shaikh, and I am a passionate React Developer working at Digital
              Salt. I specialize in building dynamic and responsive web applications using modern
              JavaScript frameworks like React.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
              I enjoy solving complex problems, writing clean and maintainable code, and
              continuously improving my skills to stay updated with the latest trends in frontend
              development.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
              At Digital Salt, I work alongside talented teams to create high-quality web
              applications that provide value and a seamless user experience.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
