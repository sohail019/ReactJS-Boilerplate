import { Box, Typography, CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import useFetchList from "../../hooks/crud/use-fetch-list";

const FetchList = () => {
  const { data, loading, error } = useFetchList<{ id: number; title: string }>(
    'https://jsonplaceholder.typicode.com/users',
  );

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
        List of Users
      </Typography>
      <List>
        {data?.map(item => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FetchList;
