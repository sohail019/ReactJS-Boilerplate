import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import { CircularProgress, Typography } from '@mui/material';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LiveChart = () => {
  const [data, setData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    // const chartData = response.data.slice(0, 10);
    // setData(chartData.map((item: any) => item.id));
    // setLabels(chartData.map((item: any) => item.title)); 
    try {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      const chartData = response.data.slice(0, 10); 
      setData(chartData.map((item: any) => item.id)); 
      setLabels(chartData.map((item: any) => item.title)); 
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Failed to load chart data: {error}</Typography>;

  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: 'Live Data',
            data,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      }}
    />
  );
};

export default LiveChart;
