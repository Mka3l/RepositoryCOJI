import React, { useState } from 'react';

const DelegationParFonctionSeychelles = () => {
  const columns = [
    "FONCTION",
    "NOMBRES DE PERSONNES"
  ];
  const rows = [
    [
      "Toutes Fonctions",
      544
    ],
    [
      "Athlètes",
      369
    ],
    [
      "Staff",
      119
    ],
    [
      "VIP",
      37
    ],
    [
      "VVIP",
      8
    ],
    [
      "Protocole"
    ],
    [
      "Effectif hors quota",
      11
    ]
  ];
  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? rows : rows.slice(0, 1);
  const firstRowStyle = {
    fontWeight: 'bold',
  };

  const tableStyle = {
    width: '500px',
    margin: 'auto', // Centrer horizontalement
    borderCollapse: 'collapse',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const thStyle = {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
    backgroundColor: '#f5f5f5',
  };

  const tdStyle = {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
    width: 'auto',
    whiteSpace: 'nowrap',
  };

  const buttonStyle = {
    backgroundColor: expanded ? '#7d240c' : '#973116',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };
  return (
    <div style={{ marginTop: '20px' }}>
    <table style={tableStyle}>
      <thead>
      <tr>
          <td colSpan={columns.length} onClick={() => setExpanded(!expanded)}>
          <button
        style={buttonStyle}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? '-' : '+'} {expanded ? 'Réduire' : 'Afficher plus'}
      </button>          </td>
        </tr>
        <tr>
          {columns.map((column, index) => (
            <th key={index} style={{ ...thStyle, textAlign: 'center' }}> {/* Ajout du style textAlign */}
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowsToShow.map((row, rowIndex) => (
          <tr key={rowIndex} style={rowIndex === 0 ? firstRowStyle : {}}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} style={cellIndex === 0 ? (rowIndex === 0 ? { ...tdStyle, textAlign: 'right' } : { ...tdStyle, textAlign: 'center' }) : { ...tdStyle, textAlign: 'center' }}>
              {typeof cell === 'number'
                  ? cell.toLocaleString()
                  : rowIndex >= 1 && cellIndex === 0 // Vérification pour les lignes à partir de la troisième et première cellule (nom de fonction)
                    ? <i>{cell}</i> // Appliquez le style italique
                    : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
  

};
export default DelegationParFonctionSeychelles;
