import React, { useState } from 'react';

const DelegationParDisciplineMayotte = () => {
  const columns = [
    "Disciplines (19)",
    "Athlètes Hommes",
    "Athlètes Femmes",
    "Encadreurs H/F",
    "Juges Arbitres",
    "Président de Fédération",
    "Responsable Admtif fédération",
    "Total"
  ];
  const rows = [
    [
      "Toutes disciplines",
      155,
      97,
      46,
      29,
      16,
      18,
      361
    ],
    [
      "Athlétisme",
      9,
      3,
      2,
      1,
      1,
      1,
      17
    ],
    [
      "Badminton (h/f)",
      6,
      4,
      0,
      1,
      1,
      1,
      13
    ],
    [
      "Basket",
      16,
      16,
      6,
      5,
      1,
      2,
      46
    ],
    [
      "Boxe (h)",
      null,
      null,
      null,
      null,
      null,
      null,
      0
    ],
    [
      "Cyclisme (h)",
      5,
      0,
      2,
      1,
      1,
      1,
      10
    ],
    [
      "Football (h)",
      23,
      null,
      3,
      3,
      1,
      1,
      31
    ],
    [
      "Haltérophilie (h/f)",
      3,
      2,
      1,
      0,
      1,
      0,
      7
    ],
    [
      "Handball",
      18,
      18,
      4,
      2,
      1,
      1,
      44
    ],
    [
      "Judo (h/f)",
      12,
      12,
      3,
      2,
      1,
      1,
      31
    ],
    [
      "Kick boxing",
      4,
      1,
      4,
      4,
      1,
      1,
      15
    ],
    [
      "Karaté",
      8,
      3,
      2,
      2,
      1,
      1,
      17
    ],
    [
      "Lutte",
      null,
      null,
      null,
      null,
      null,
      null,
      0
    ],
    [
      "Natation",
      null,
      null,
      null,
      null,
      null,
      null,
      0
    ],
    [
      "Pétanque",
      4,
      3,
      2,
      2,
      1,
      1,
      13
    ],
    [
      "Rugby à 7 (h)",
      12,
      12,
      4,
      1,
      1,
      1,
      31
    ],
    [
      "Taekwondo",
      2,
      0,
      1,
      0,
      1,
      1,
      5
    ],
    [
      "Tennis",
      6,
      1,
      2,
      2,
      1,
      1,
      13
    ],
    [
      "Tennis de Table (h/f)",
      6,
      1,
      2,
      1,
      1,
      1,
      12
    ],
    [
      "Volley-ball",
      14,
      14,
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
    border: '1px solid #ddd',
    backgroundColor: '#f5f5f5',
  };

  const tdStyle = {
    padding: '10px',
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


export default DelegationParDisciplineMayotte;
