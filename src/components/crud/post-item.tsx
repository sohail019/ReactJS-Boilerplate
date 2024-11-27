import { Box, Typography, Button } from '@mui/material';

const PostItem = ({ post, handleUpdateClick, handleDeleteClick }: any) => (
  <Box
    sx={{
      marginTop: 4,
      padding: 2,
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: theme => theme.shadows[3],
    }}
  >
    <Typography variant="h6">{post.title}</Typography>
    <Typography>{post.body}</Typography>
    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
      <Button variant="outlined" color="secondary" onClick={() => handleUpdateClick(post.id)}>
        Update
      </Button>
      <Button variant="outlined" color="error" onClick={() => handleDeleteClick(post.id)}>
        Delete
      </Button>
    </Box>
  </Box>
);

export default PostItem;
