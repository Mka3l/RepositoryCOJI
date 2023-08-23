import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const DelegationCostPieChart = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FFA07A', '#FF4500', '#9ACD32'];

  return (
    <div>
      <h3>Coûts totaux par délégation</h3>
      <PieChart width={800} height={400}>
        <Pie
          data={data}
          dataKey="totalCost"
          nameKey="delegation"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default DelegationCostPieChart;
