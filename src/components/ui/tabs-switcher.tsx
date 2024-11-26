import { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import DataTable from '../table/data-table'; 

const TabSwitcher = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'firstName' }, 
    { headerName: 'Email', field: 'email' },
    { headerName: 'Phone', field: 'phone' },
    { headerName: 'Gender', field: 'gender' },
    { headerName: 'Age', field: 'age' },
    { headerName: 'IP Address', field: 'ip' },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={tabValue} onChange={handleChange} aria-label="tabs for table and graph">
        <Tab label="Table" />
        <Tab label="Graph" />
      </Tabs>

      <Box sx={{ padding: 3 }}>
        
        {tabValue === 0 && (
          <DataTable
            url="https://dummyjson.com/users" 
            columnDefs={columnDefs}
            exportFileName="user_data"
          />
        )}

        {tabValue === 1 && (
          <Typography variant="h6" color="textSecondary">
            Graph (Integration with AmCharts will be here)
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default TabSwitcher;
