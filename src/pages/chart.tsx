import LiveChart from '../components/charts/live-chart';
import ErrorBoundaryComponent from '../components/errors/error-boundary';
import { Box, Typography } from '@mui/material';

const ChartPage = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Live Data Chart
      </Typography>
      <ErrorBoundaryComponent>
        <LiveChart />
      </ErrorBoundaryComponent>
    </Box>
  );
};

export default ChartPage;
