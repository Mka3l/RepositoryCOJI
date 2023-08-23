import React from 'react';

const DelegationsTable = () => {
  const data = [
    { name: 'Athlètes', nombrePersonnes: 1423 },
    { name: 'Staff', nombrePersonnes: 45 },
    { name: 'VVIP', nombrePersonnes: 3 },
    { name: 'VIP', nombrePersonnes: 11 },
    { name: 'Protocole', nombrePersonnes: 1 },
  ];
  

  // Calculer le nombre total de personnes
  const totalPersonnes = data.reduce((acc, current) => acc + current.nombrePersonnes, 0);

  const thStyle = {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
  };

  const blueBackgroundStyle = {
    backgroundColor: '#973116', // Couleur bleu clair
  };

  const strongStyle = {
    fontWeight: 'bold',
  };

  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th style={{ ...thStyle, ...blueBackgroundStyle }}><strong style={strongStyle}>Délégations</strong></th>
            <th style={{ ...thStyle, ...blueBackgroundStyle }}><strong style={strongStyle}>Nombre de Personnes</strong></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={tdStyle}>{item.name}</td>
              <td style={tdStyle}>{item.nombrePersonnes}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td style={{ ...tdStyle, ...blueBackgroundStyle, ...strongStyle }}>Total</td>
            <td style={tdStyle}>{totalPersonnes}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DelegationsTable;
