import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DelegationBarCostChart = ({ data }) => {
  return (
    <div>
      <h3>Coûts totaux des délégations</h3>
      <BarChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="delegation" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="hebergement" stackId="a" fill="#8884d8" name="Hébergement" />
        <Bar dataKey="transport" stackId="a" fill="#82ca9d" name="Transport" />
        <Bar dataKey="restauration" stackId="a" fill="#ffc658" name="Restauration" />
      </BarChart>
    </div>
  );
};

export default DelegationBarCostChart;
