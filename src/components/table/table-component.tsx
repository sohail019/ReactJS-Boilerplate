import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import useFetchData from "../../hooks/crud/use-fetch-data";

interface Data {
  id: number;
  name: string;
  
}

const TableComponent = ({url}: {url: string}) => {
    const {data, isLoading, isError, error} = useFetchData(url)

    if (isLoading) {
      return <CircularProgress />;
    }

    if (isError) {
      return (
        <Typography color="error">
          Error: {error instanceof Error ? error.message : 'An error occurred'}
        </Typography>
      );
    }

    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item: Data) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                {/* Render more data columns here */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default TableComponent