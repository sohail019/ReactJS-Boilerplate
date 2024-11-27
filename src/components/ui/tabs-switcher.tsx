import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../store/slices/tab-slice';
import { Tabs, Tab, Box, Button } from '@mui/material';
import DataTable from '../table/data-table';
import useFetchData from '../../hooks/crud/use-fetch-data';
import { IoIosMale, IoIosFemale } from 'react-icons/io';
import ChartComponent from '../charts/chart-component';

const TabSwitcher = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: any) => state.tab.activeTab);
  const url = 'https://dummyjson.com/users';
  const { data, isLoading, isError, error } = useFetchData(url);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(setActiveTab(newValue));
  };

  const GenderCellRenderer = (params: any) => {
    const { value } = params;
    return value === 'male' ? (
      <>
      {"Male "}
      <IoIosMale style={{ color: 'blue' }} />
      </>
    ) : value === 'female' ? (
      <>
      {"Female "}
      <IoIosFemale style={{ color: 'red' }} />
      </>
    ) : (
      <span>Unknown</span>
    );
  };

  const ActionCellRenderer = (params: any) => {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => alert(`Action for ${params.data.firstName}`)}
      >
        Click me
      </Button>
    );
  };

  const columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Name', field: 'firstName' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Phone', field: 'phone' },
    {
      headerName: 'Gender',
      field: 'gender',
      cellRenderer: (params: any) => <GenderCellRenderer {...params} />,
    },
    { headerName: 'Age', field: 'age' },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: (params: any) => <ActionCellRenderer {...params} />,
    },
    { headerName: 'IP Address', field: 'ip' },
  ];

  const chartData =
    data?.users?.map((user: any) => ({
      category: `${user.firstName} ${user.lastName}`,
      value: user.age,
    })) || [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data: {error?.message}</div>;
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={activeTab} onChange={handleTabChange} aria-label="Tabs for Table and Chart">
        <Tab label="Table" />
        <Tab label="Chart" />
      </Tabs>

      <Box sx={{ padding: 3 }}>
        {activeTab === 0 && (
          <DataTable
            rowData={data?.users || []}
            url={url}
            columnDefs={columnDefs}
            exportFileName="user_data"
          />
        )}

        {activeTab === 1 && (
          <Box sx={{ paddingTop: 2 }}>
            <ChartComponent data={chartData} chartType="line" title="AM Chart" />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TabSwitcher;
