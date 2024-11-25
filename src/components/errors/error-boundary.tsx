import { Box, Button, Typography } from "@mui/material";
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
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
      <Typography variant="h5" color="error" gutterBottom>
        Something went wrong
      </Typography>
      <Typography variant="body1" gutterBottom>
        {error?.message || 'An unexpected error occurred.'}
      </Typography>
      <Button variant="contained" color="primary" onClick={resetErrorBoundary} sx={{ mt: 2 }}>
        Retry
      </Button>
    </Box>
  );
};

const ErrorBoundaryComponent = ({children}: {children: React.ReactNode}) => {
    return (
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          console.log('Reset Triggered');
        }}
        onError={(error, info) => {
          console.error('Error logged:', error, info);
        }}
      >
        {children}
      </ErrorBoundary>
    );
}

export default ErrorBoundaryComponent