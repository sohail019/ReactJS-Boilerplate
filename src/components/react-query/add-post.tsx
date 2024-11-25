// @ts-nocheck
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

interface Post {
  title: string;
  body: string;
}

// Mutation function to create a new post
const createPost = async (post: Post) => {
  const response = await axios.post('/api/posts', post);
  return response.data;
};

const AddPostForm = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const mutation = useMutation({
    mutationFn: createPost, 
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 3,
        maxWidth: 400,
        margin: 'auto',
        backgroundColor: 'background.paper',
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Add New Post
      </Typography>

      <TextField
        label="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        label="Body"
        value={body}
        onChange={e => setBody(e.target.value)}
        fullWidth
        margin="normal"
        multiline
        rows={4}
        required
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={mutation.isLoading || !title || !body}
        sx={{ marginTop: 2, width: '100%' }}
      >
        {mutation.isLoading ? 'Adding...' : 'Add Post'}
      </Button>
    </Box>
  );
};

export default AddPostForm;
