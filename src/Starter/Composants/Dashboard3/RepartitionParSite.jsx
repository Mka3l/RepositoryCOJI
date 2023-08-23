import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DelegationBySiteChart = ({ data }) => {
  return (
    <div>
      <h3>Répartition des délégations par site d'Hébergement</h3>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="site" />
        <YAxis />
        <Tooltip />
        <Legend />
        {data.map((siteData, index) => (
          siteData.delegations.map((delegation, subIndex) => (
            <Bar
              key={`${siteData.site}-${delegation.name}`} // Utiliser siteData.site et delegation.name pour créer une clé unique
              dataKey={`delegations[${subIndex}].nombrePersonne`}
              name={`${delegation.name} (${siteData.site})`}
              fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            />
          ))
        ))}
      </BarChart>
    </div>
  );
};

export default DelegationBySiteChart;
