import React, { useState } from 'react';
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';
import useCreateResource from '../../hooks/crud/use-create-resource';

const CreateResource = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { data, loading, error, createResource } = useCreateResource<{
    id: number;
    title: string;
    body: string;
  }>('https://jsonplaceholder.typicode.com/posts');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createResource({ title, body });
  };

  return (
    <Box sx={{ padding: 4, maxWidth: 500, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Create New Post
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          fullWidth
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Body"
          value={body}
          onChange={e => setBody(e.target.value)}
          fullWidth
          multiline
          rows={4}
          required
          sx={{ marginBottom: 2 }}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Submit'}
        </Button>
      </form>

      {error && (
        <Typography variant="body1" color="error" sx={{ marginTop: 2 }}>
          Error: {error}
        </Typography>
      )}

      {data && (
        <Box sx={{ marginTop: 4, padding: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
          <Typography variant="h6" gutterBottom>
            New Post Created:
          </Typography>
          <Typography>Title: {data.title}</Typography>
          <Typography>Body: {data.body}</Typography>
          <Typography>ID: {data.id}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default CreateResource;
