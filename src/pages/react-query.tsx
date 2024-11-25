import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/apiClient";
import { Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const fetchUsers = async () => {
    const res = await axiosInstance.get('/users')
    return res.data //? returns the data in response
};

export default function ReactQuery() {
  const {
    data: users,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 5000, 
    // cacheTime: 10000, 
  });

    if(isLoading) return <CircularProgress />

    if (isError) {
      return <Typography color="error">Error fetching users: {error.message}</Typography>;
    }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Users (React Query with Axios)
        <Button variant="contained" color="primary" onClick={async() => refetch()}>
          Refetch Data
        </Button>
      </Typography>
      {isFetching && <Typography>Refreshing Data...</Typography>}
      <TableContainer sx={{ mx: 'auto', px: { xs: 2, sm: 4, md: 6 } }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>ID</strong>
              </TableCell>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
              </TableCell>
              <TableCell>
                <strong>Phone</strong>
              </TableCell>
              <TableCell>
                <strong>Website</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user: any) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.website}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
