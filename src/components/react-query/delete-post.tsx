//@ts-nocheck 
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const deletePost = async (id: number) => {
  const response = await axios.delete(`/api/posts/${id}`);
  return response.data;
};

const DeletePostButton = ({ id }: { id: number }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: deletePost,
    onMutate: async(postId) => {
        await queryClient.cancelQueries(['posts'])
        const previousPosts = queryClient.getQueryData(['posts']);

        queryClient.setQueryData(['posts'], (oldPosts: any[] | undefined) => oldPosts?.filter((post) => post.id !== postId));

        return {previousPosts}
    },
    onError: (error, postId, context) => {
      queryClient.setQueryData(['posts'], context?.previousPosts);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });

  const handleDelete = () => {
    mutate(id);
  };

  return (
    <Box>
      <Button variant="contained" color="error" onClick={handleDelete} disabled={isLoading}>
        {isLoading ? 'Deleting...' : 'Delete Post'}
      </Button>
      {isError && <Typography color="error">Error deleting the post</Typography>}
    </Box>
  );
};

export default DeletePostButton;
