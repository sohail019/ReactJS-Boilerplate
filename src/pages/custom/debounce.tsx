import { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import {useDebounce} from "../../hooks/common/use-debounce";


const Debounce = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Debounce Hook Demo
      </Typography>

      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={handleInputChange}
        sx={{ marginBottom: 2 }}
      />
      <Typography variant="body1" color="primary">
        Debounced Value: {debouncedValue}
      </Typography>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body1">
          This will only update after 500ms of inactivity in the input field.
        </Typography>
      </Box>
    </Box>
  );
};

export default Debounce;
