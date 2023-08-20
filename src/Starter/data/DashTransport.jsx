import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const MyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartOptions = {
      series: [{
        name: "Desktops",
        data: ["57/100"]
      }],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: [ 'Aug'],
      }
    };

    const chart = new ApexCharts(chartRef.current, chartOptions);
    chart.render();

    // Nettoyage du graphique lorsque le composant est démonté
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="lineChart" ref={chartRef} />;
};

export default MyChart;
