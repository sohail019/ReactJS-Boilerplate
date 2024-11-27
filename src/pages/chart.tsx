import ChartComponent from '../components/charts/chart-component';
import LiveChart from '../components/charts/live-chart';
import ErrorBoundaryComponent from '../components/errors/error-boundary';
import { Box, Typography } from '@mui/material';

const ChartPage = () => {
  const mockData = [
    { category: 'January', value: 50 },
    { category: 'February', value: 80 },
    { category: 'March', value: 65 },
    { category: 'April', value: 90 },
    { category: 'May', value: 70 },
    { category: 'June', value: 100 },
    { category: 'July', value: 85 },
    { category: 'August', value: 95 },
    { category: 'September', value: 75 },
    { category: 'October', value: 60 },
    { category: 'November', value: 80 },
    { category: 'December', value: 110 },
  ];
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Live Data Chart
      </Typography>
      <ErrorBoundaryComponent>
        {/* <LiveChart />  */}
        <ChartComponent
          data={mockData} 
          chartType="line" 
          title="Monthly Sales Dataaa"
        />
      </ErrorBoundaryComponent>
    </Box>
  );
};

export default ChartPage;
