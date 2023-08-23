import React from 'react';

const DelegationDistributionTable = () => {
  // Données fictives pour le graphique
  const data = [
    { name: 'Staff', value: 3 },
    { name: 'VVIP', value: 1 },
    { name: 'VIP', value: 1 },
    { name: 'Athlètes', value: 95.5},
    { name: 'Protocole', value: 0.5 },
  ];

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
  };

  const strongStyle = {
    fontWeight: 'bold',
  };
  const blueBackgroundStyle = {
    backgroundColor: '#973116', // Couleur bleu clair
  };

  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr >
            <th style={{ ...tdStyle, ...blueBackgroundStyle, ...strongStyle }}><strong style={strongStyle}>Délégations</strong></th>
            <th style={{ ...tdStyle, ...blueBackgroundStyle, ...strongStyle }}><strong style={strongStyle}>Pourcentage</strong></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={tdStyle}>{item.name}</td>
              <td style={tdStyle}>{item.value}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DelegationDistributionTable;
