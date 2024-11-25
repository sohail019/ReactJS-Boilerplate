import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" color="error" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
