import React, { useState } from 'react';

const DelegationParDisciplineMaldives = () => {
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
      77,
      86,
      44,
      16,
      9,
      10,
      242
    ],
    [
      "Athlétisme",
      12,
      12,
      7,
      3,
      1,
      1,
      36
    ],
    [
      "Badminton (h/f)",
      6,
      6,
      3,
      2,
      1,
      1,
      19
    ],
     [
      "Basket",
      4,
      16,
      6,
      3,
      1,
      2,
      32
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
      null,
      null,
      null,
      null,
      null,
      null,
      0
    ],
    [
      "Football (h)",
      null,
      null,
      null,
      null,
      null,
      null,
      0
    ],
    [
      "Haltérophilie (h/f)",
      null,
      null,
      null,
      null,
      null,
      null,
      0
    ],
    [
      "Handball",
      15,
      15,
      8,
      2,
      1,
      1,
      42
    ],
    [
      "Judo (h/f)",
      null,
      null,
      null,
      null,
      null,
      null,
      0
    ],
    [
      "Kick boxing",
      null,
      null,
      null,
      null,
      null,
      null,
      0
    ],
    [
      "Karaté",
      null,
      null,
      null,
      null,
      null,
      null,
      0
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
      6,
      6,
      3,
      2,
      1,
      1,
      19
    ],
    [
      "Pétanque",
      null,
      null,
      null,
      null,
      null,
      null,
      0
    ],
    [
      "Rugby à 7 (h)",
      null,
      null,
      null,
      null,
      null,
      null,
      0
    ],
    [
      "Taekwondo",
      4,
      1,
      3,
      null,
      1,
      1,
      10
    ],
    [
      "Tennis",
      4,
      4,
      2,
      null,
      1,
      1,
      12
    ],
    [
      "Tennis de Table (h/f)",
      5,
      5,
      3,
      2,
      1,
      1,
      17
    ],
    [
      "Volley-ball",
      14,
      14,
      6,
      2,
      1,
      1,
      38
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

export default DelegationParDisciplineMaldives;
