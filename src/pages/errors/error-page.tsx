import { Box, Typography, Button } from '@mui/material';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error: any = useRouteError();
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
        Oops! An Error Occurred
      </Typography>
      <Typography variant="body1" gutterBottom>
        {error?.statusText || error?.message || 'Something went wrong.'}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Go Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
