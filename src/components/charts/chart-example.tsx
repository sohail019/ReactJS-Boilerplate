import { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import useFetchData from '../../hooks/crud/use-fetch-data'; 

const ChartExample = () => {
  const chartDivRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, isError, error } = useFetchData('https://dummyjson.com/users');

  useEffect(() => {
    if (isLoading || isError || !data || !data.users) return;

    const root = am5.Root.new(chartDivRef.current!);

    // Create the chart
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      }),
    );

    // Prepare data
    const chartData = data.users.map((user: any) => ({
      category: `${user.firstName} ${user.lastName}`,
      age: user.age,
      height: user.height,
      weight: user.weight,
    }));

    // Create Y-axis
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      }),
    );

    // Create X-Axis
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: 'category',
      }),
    );
    xAxis.data.setAll(chartData);

    // Create series for Age
    const ageSeries = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Age',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'age',
        categoryXField: 'category',
      }),
    );
    ageSeries.data.setAll(chartData);

    // Create series for Height
    const heightSeries = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: 'Height',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'height',
        categoryXField: 'category',
        stroke: am5.color(0x22a6b3), 
      }),
    );
    heightSeries.data.setAll(chartData);

    // Create series for Weight
    const weightSeries = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Weight',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'weight',
        categoryXField: 'category',
        fill: am5.color(0xeb4d4b), 
      }),
    );
    weightSeries.data.setAll(chartData);

    const legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    chart.set('cursor', am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, [data, isLoading, isError]);

  if (isLoading) return <p>Loading chart...</p>;
  if (isError) return <p>Error loading chart: {error?.message}</p>;

  return <div id="chartdiv" ref={chartDivRef} style={{ width: '100%', height: '500px' }} />;
};

export default ChartExample;
