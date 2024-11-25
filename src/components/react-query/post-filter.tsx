import { TextField, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/slices/filter-slice';
import { RootState } from '../../store/store';

const PostFilter = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.filter.searchTerm);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        fullWidth
        label="Search Posts"
        variant="outlined"
        value={searchTerm}
        onChange={handleFilterChange}
      />
    </Box>
  );
};

export default PostFilter;
