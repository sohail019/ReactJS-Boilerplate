import React, { useEffect, useRef, useState } from 'react';
import { Typography, Box } from '@mui/material';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import ChartExample from './chart-example';

interface ChartComponentProps {
  data: any[];
  chartType: 'line' | 'bar';
  title: string;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data, chartType, title }) => {
  const chartRef = useRef<any>(null);
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    console.log(data);
    if (!data || data.length === 0) return;

    if (!chartRef.current) {
      const root = am5.Root.new('chartdiv');
      chartRef.current = root;

      const chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: 'zoomXY',
          wheelY: 'zoomXY',
          pinchZoomX: true,
        }),
      );

      const xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: 'category',
          renderer: am5xy.AxisRendererX.new(root, {}),
        }),
      );

      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {}),
        }),
      );

      let series;

      if (chartType === 'line') {
        series = chart.series.push(
          am5xy.LineSeries.new(root, {
            name: 'Line Series',
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: 'value',
            categoryXField: 'category',
          }),
        );
      } else if (chartType === 'bar') {
        series = chart.series.push(
          am5xy.ColumnSeries.new(root, {
            name: 'Bar Series',
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: 'value',
            categoryXField: 'category',
          }),
        );
      }

      if (series) {
        series.data.setAll(data);
        series.set(
          'tooltip',
          am5.Tooltip.new(root, {
            labelText: '{categoryX}: {valueY}',
          }),
        );
      }

      setChartReady(true);
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.dispose();
      }
    };
  }, [data, chartType]);

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box
        id="chartdiv"
        sx={{
          height: '550px',
          width: '100%',
          bgcolor: "white",
          border: '2px dashed black',
          borderRadius: "20px",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ChartExample />
        {!chartReady && (
          <Typography variant="h6" color="textSecondary">
            Chart will be rendered here
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ChartComponent;
