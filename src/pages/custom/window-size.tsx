import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { useWindowSize } from '../../hooks/common/use-window-size';

const WindowSize: React.FC = () => {
  const { width, height } = useWindowSize();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: '100%',
          boxShadow: 3,
          borderRadius: 2,
          padding: 3,
        }}
      >
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: 2 }}>
            Window Size Tracker
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
            Width: <strong>{width}px</strong>
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', marginTop: 1 }}>
            Height: <strong>{height}px</strong>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WindowSize;
