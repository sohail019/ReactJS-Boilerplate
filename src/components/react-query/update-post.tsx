  // @ts-nocheck
  import { Button, CircularProgress, TextField, Typography } from '@mui/material';
  import { useMutation, useQueryClient } from '@tanstack/react-query';
  import axios from 'axios';
  import { useState } from 'react';

  const updatePost = async (post: { id: number; title: string; body: string }) => {
    const response = await axios.put(`/api/posts/${post.id}`, {
      title: post.title,
      body: post.body,
    });
    return response.data;
  };

  const UpdatePostForm = ({ post }: { post: { id: number; title: string; body: string } }) => {
    const [updatedPost, setUpdatedPost] = useState({ ...post });
    const queryClient = useQueryClient();

    const { mutate, isLoading, isError, isSuccess } = useMutation({
      mutationFn: updatePost,
      onSuccess: () => {
        queryClient.invalidateQueries(['posts']);
        alert('Post Updated Successfully');
      },
      onError: (error: any) => {
        console.error('Error updating post:', error);
        alert('Error Updating Post');
      },
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUpdatedPost(prevPost => ({
        ...prevPost,
        [e.target.name]: e.target.value,
      }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      mutate(updatedPost);
    };

    return (
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Update Post</Typography>
        <TextField
          label="Title"
          name="title"
          value={updatedPost.title}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Body"
          name="body"
          value={updatedPost.body}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
          {isLoading ? <CircularProgress size={24} /> : 'Update Post'}
        </Button>
        {isError && <Typography color="error">Error updating post</Typography>}
        {isSuccess && <Typography color="primary">Post updated successfully!</Typography>}
      </form>
    );
  };

  export default UpdatePostForm;
