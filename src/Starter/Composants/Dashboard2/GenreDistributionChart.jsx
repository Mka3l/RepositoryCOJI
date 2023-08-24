import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const GenderDistributionChart = () => {
  // Données fictives pour le graphique
  const data = [
    { name: 'Hommes', value: 65 },
    { name: 'Femmes', value: 35 },
  ];

  const colors = ['#973116', '#FFC107'];
  

  const renderLegend = (props) => {
    const { payload } = props;

    return (
      <ul className="list-unstyled">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} className="mb-2">
            <span style={{ color: entry.color }}>{entry.payload.value}%</span> - {entry.payload.name}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div style={{ width: '550px', height: '290px', border: '1px solid #ddd', padding: '10px', marginTop: '55px' }}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          data={data}
          cx="60%"
          cy="35%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        
        <Legend
          align="right"
          verticalAlign="top"
          layout="vertical"
          content={renderLegend}
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default GenderDistributionChart;
