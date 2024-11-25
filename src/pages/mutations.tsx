import React from 'react';
import { ErrorBoundary } from 'react-error-boundary'; 
import { Box, Button, CircularProgress, Divider, List, ListItem, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import AddPostForm from '../components/react-query/add-post';
import UpdatePostForm from '../components/react-query/update-post';
import DeletePostButton from '../components/react-query/delete-post';
import PostFilter from '../components/react-query/post-filter';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useDebounce } from '../hooks/common/use-debounce';
import ErrorFallback from '../components/errors/error-boundary'; 

//? Fetch posts from the mock API
const fetchPosts = async (searchTerm = '') => {
  const response = await axios.get('/api/posts', { params: { filter: searchTerm } });
  return response.data.posts;
};

const PostsList = () => {
  const { searchTerm } = useSelector((state: RootState) => state.filter);
  const debouncedSearchTerm = useDebounce(searchTerm, 800);
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['posts', debouncedSearchTerm],
    queryFn: () => fetchPosts(debouncedSearchTerm),
  });

  const [editingPost, setEditingPost] = React.useState<any | null>(null);

  const handleEditClick = (post: any) => {
    setEditingPost(post);
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
  };

  if (isLoading) return <CircularProgress />;
  if (isError) throw new Error('Failed to load posts.');

  return (
    <Box sx={{ padding: 2 }}>
      <Typography align="center" variant="h4" gutterBottom>
        Posts
      </Typography>
      <AddPostForm />
      <PostFilter />
      {editingPost && <UpdatePostForm post={editingPost} />}
      <List>
        {posts.map((post: any) => (
          <ListItem key={post.id} sx={{ padding: 2 }}>
            <Paper sx={{ width: '100%', padding: 2, boxShadow: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                {post.title}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1, color: 'text.secondary' }}>
                {post.body}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  onClick={() => handleEditClick(post)}
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Edit
                </Button>
                <DeletePostButton id={post.id} />
              </Box>
            </Paper>
            <Divider sx={{ my: 2 }} />
          </ListItem>
        ))}
      </List>
      {editingPost && (
        <Button onClick={handleCancelEdit} variant="outlined" sx={{ mt: 2 }}>
          Cancel Edit
        </Button>
      )}
    </Box>
  );
};

const ReactQueryPage = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback} 
      onReset={() => window.location.reload()} 
    >
      <PostsList />
    </ErrorBoundary>
  );
};

export default ReactQueryPage;
