import { Box, Typography, CircularProgress, Button } from '@mui/material';
import { useState } from 'react';
import useFetchById from '../../hooks/crud/use-fetch-by-id';

const FetchById = () => {
  const [postId, setPostId] = useState<number>(1); 
  const { data, loading, error } = useFetchById<{
    id: number;
    title: string;
    description: string;
    category: string;
    images: string[];
  }>('https://dummyjson.com/products', postId);


  const handleChangePost = () => {
    setPostId(prev => (prev < 10 ? prev + 1 : 1)); 
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h6" color="error">
          Error: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Product Detail (ID: {postId})
      </Typography>
      <Typography variant="h5">Title: {data?.title}</Typography>
      <Typography variant="body1">Description: {data?.description}</Typography>
      <Typography variant="body1">Category: {data?.category}</Typography>
      <Box sx={{ marginTop: 2 }}>
        <img src={data?.images} width="20%" alt="Image" />
      </Box>

      <Button variant="contained" sx={{ marginTop: 2 }} onClick={handleChangePost}>
        Load Next Product
      </Button>
    </Box>
  );
};

export default FetchById;
