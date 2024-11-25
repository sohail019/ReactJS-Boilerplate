import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServerErrorPage: React.FC = () => {
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
        500 - Internal Server Error
      </Typography>
      <Typography variant="body1" gutterBottom>
        Something went wrong on our end. Please try again later.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Go Back Home
      </Button>
    </Box>
  );
};

export default ServerErrorPage;
