import React from 'react';

const SportDisciplinesTable = () => {
  // Données fictives pour le graphique
  const data = [
    { name: 'Football', value: 125 },
    { name: 'Natation', value: 193 },
    { name: 'Athlétisme', value: 90 },
    { name: 'Tennis de table', value: 120 },
    { name: 'Basketball', value: 135 },
    { name: 'Handball', value: 90 },
    { name: 'Badminton', value: 65 },
    { name: 'Rugby', value: 220 },
    { name: 'Para-athlétisme', value: 135 },
    { name: 'Kick Boxing', value: 160 },
    { name: 'Karaté', value: 90 },
  ];
  // Calculer la somme des valeurs
  const totalValue = data.reduce((total, item) => total + item.value, 0);

  // Ajouter l'objet 'Total' à data
  data.push({ name: 'Total', value: totalValue });

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
  };

  const blueBackgroundStyle = {
    backgroundColor: '#973116', // Couleur bleu clair
    fontWeight: 'bold',
  };


  const strongStyle = {
    fontWeight: 'bold',
  };

  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th style={{ ...tdStyle, ...blueBackgroundStyle, ...strongStyle }}><strong style={strongStyle}>Disciplines sportives</strong></th>
            <th style={{ ...tdStyle, ...blueBackgroundStyle, ...strongStyle }}><strong style={strongStyle}>Nombre Athlètes</strong></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ ...tdStyle, ...(item.name === 'Total' ? blueBackgroundStyle : {}) }}>
                {item.name}
              </td>
              <td style={tdStyle}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SportDisciplinesTable;
