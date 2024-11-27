import React from 'react';
import { Box, TextField, Button, CircularProgress } from '@mui/material';

const PostForm = ({ formData, setFormData, isCreating, isUpdating, handleSubmit }: any) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box component="form" sx={{ mt: 2 }}>
      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Body"
        name="body"
        value={formData.body}
        onChange={handleInputChange}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={isCreating || isUpdating}
        sx={{ mt: 2 }}
      >
        {isCreating || isUpdating ? (
          <CircularProgress size={24} />
        ) : formData.id ? (
          'Update Post'
        ) : (
          'Create Post'
        )}
      </Button>
    </Box>
  );
};

export default PostForm;
