import React, { useState } from 'react';

const DelegationParDisciplineReunion = () => {
  const columns = [
    "Disciplines (19)",
    "Athlètes Hommes",
    "Athlètes Femmes",
    " Total Athlètes",
    "Encadreurs H/F",
    "Juges Arbitres",
    "Président de Fédération",
    "Responsable Admtif fédération",
    "Total"
  ];
  const rows = [
    [
      "Total",
      259,
      219,
      478,
      83,
      45,
      21,
      24,
      652
    ],
    [
      "Athlétisme",
      38,
      38,
      76,
      16,
      1,
      2,
      2,
      97
    ],
    [
      "Badminton (h/f)",
      6,
      6,
      12,
      2,
      1,
      1,
      1,
      17
    ],
    [
      "Basket",
      16,
      16,
      32,
      6,
      5,
      1,
      3,
      47
    ],
    [
      "Boxe (h)",
      13,
      0,
      13,
      3,
      2,
      1,
      1,
      20
    ],
    [
      "Cyclisme ",
      8,
      8,
      16,
      4,
      2,
      1,
      1,
      24
    ],
    [
      "Football (h)",
      23,
      0,
      23,
      3,
      3,
      1,
      1,
      31
    ],
    [
      "Haltérophilie (h/f)",
      10,
      10,
      20,
      4,
      3,
      1,
      1,
      29
    ],
    [
      "Handball",
      18,
      18,
      36,
      4,
      2,
      1,
      1,
      44
    ],
    [
      "Judo (h/f)",
      14,
      14,
      28,
      4,
      4,
      1,
      1,
      38
    ],
    [
      "Kick boxing",
      7,
      7,
      14,
      2,
      2,
      1,
      1,
      20
    ],
    [
      "Karaté",
      14,
      10,
      24,
      4,
      3,
      1,
      1,
      33
    ],
    [
      "Lutte",
      10,
      10,
      20,
      2,
      2,
      1,
      1,
      26
    ],
    [
      "Natation",
      19,
      19,
      38,
      7,
      3,
      2,
      2,
      52
    ],
    [
      "Pétanque",
      10,
      10,
      20,
      2,
      2,
      1,
      1,
      26
    ],
    [
      "Rugby à 7 (h)",
      12,
      12,
      24,
      5,
      2,
      1,
      1,
      33
    ],
    [
      "Taekwondo",
      8,
      8,
      16,
      3,
      2,
      1,
      1,
      23
    ],
    [
      "Tennis",
      6,
      6,
      12,
      2,
      2,
      1,
      1,
      18
    ],
    [
      "Tennis de Table (h/f)",
      6,
      6,
      12,
      2,
      2,
      1,
      1,
      18
    ],
    [
      "Volley-ball",
      14,
      14,
      28,
      6,
      2,
      1,
      2,
      39
    ],
  ];
  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? rows : rows.slice(0, 1);
  const firstRowStyle = {
    fontWeight: 'bold',
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

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const thStyle = {
    padding: '10px',
    textAlign: 'left',
    border: '1px solid #ddd',
    backgroundColor: '#f5f5f5',
  };

  const tdStyle = {
    padding: '10px',
    textAlign: 'left',
    border: '1px solid #ddd',
  };
  return (
    <div style={{ marginTop: '20px' }}>
      <button
        style={buttonStyle}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? '-' : '+'} {expanded ? 'Réduire' : 'Afficher plus'}
      </button>
      {expanded && (
        <table style={tableStyle}>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index} style={thStyle}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowsToShow.map((row, rowIndex) => (
              <tr key={rowIndex} style={rowIndex === 0 ? firstRowStyle : {}}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={tdStyle}>
                    {typeof cell === 'number'
                      ? cell % 1 !== 0
                        ? cell.toFixed(2)
                        : cell
                      : typeof cell === 'string' && !isNaN(parseFloat(cell.replace(',', '.')))
                        ? parseFloat(cell.replace(',', '.')).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                        : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
  
};


export default DelegationParDisciplineReunion;
