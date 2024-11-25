import { Box, Button, CircularProgress, List, ListItem, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import PostFilter from '../components/react-query/post-filter';
import { useNavigate } from 'react-router-dom';
import { navigateToErrorPage } from '../utils/navigate-to-errorpage';

export default function Traditional() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('https://jsonplaceholder.typicode.com/users');

      if (res.status === 500) {
        navigateToErrorPage(navigate, 500);
        return;
      }
      if (!res.ok) {
        throw new Error(`Unexpected error occurred (Status: ${res.status})`);
      }

      const data = await res.json();
      setUsers(data);
    } catch (error: any) {
      setError(error.message); 
      navigateToErrorPage(navigate, 500); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h6" color="error">
          Error fetching users: {error}
        </Typography>
        <Button variant="contained" color="primary" onClick={fetchUsers} sx={{ mt: 2 }}>
          Retry
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Users (Traditional Fetch)
      </Typography>
      <PostFilter />
      <List>
        {users.map(user => (
          <ListItem key={user.id}>{user.name}</ListItem>
        ))}
      </List>
    </Box>
  );
}
