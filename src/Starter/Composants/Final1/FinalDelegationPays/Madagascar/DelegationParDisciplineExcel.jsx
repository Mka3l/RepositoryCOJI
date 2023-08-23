import React, { useState } from 'react';

const DelegationParDisciplineMadagascar = () => {
  const columns = [
    "Disciplines (19)",
    "Athlètes Hommes",
    "Athlètes Femmes",
    " Total Athlètes",
    "Encadreurs H/F",
    "Juges Arbitres",
    "Officiels Techniques",
    "Président de Fédération",
    "Responsable Admtif fédération",
    "Total"
  ]
  const rows = [
    [
      "Total",
      265,
      220,
      485,
      83,
      46,
      799,
      21,
      25,
      1459
    ],
    [
      "Athlétisme",
      38,
      38,
      76,
      16,
      1,
      190,
      2,
      2,
      287
    ],
    [
      "Badminton (h/f)",
      6,
      6,
      12,
      2,
      1,
      65,
      1,
      1,
      82
    ],
    [
      "Basket",
      16,
      16,
      32,
      6,
      5,
      60,
      1,
      3,
      107
    ],
    [
      "Boxe (h)",
      13,
      0,
      13,
      3,
      2,
      12,
      1,
      1,
      32
    ],
    [
      "Cyclisme ",
      8,
      8,
      16,
      4,
      2,
      56,
      1,
      1,
      80
    ],
    [
      "Football (h)",
      23,
      0,
      23,
      3,
      3,
      36,
      1,
      1,
      67
    ],
    [
      "Haltérophilie (h/f)",
      10,
      10,
      20,
      4,
      3,
      25,
      1,
      1,
      54
    ],
    [
      "Handball",
      18,
      18,
      36,
      4,
      2,
      18,
      1,
      1,
      62
    ],
    [
      "Judo (h/f)",
      14,
      14,
      28,
      4,
      4,
      39,
      1,
      1,
      77
    ],
    [
      "Kick boxing",
      9,
      5,
      14,
      2,
      2,
      25,
      1,
      1,
      45
    ],
    [
      "Karaté",
      14,
      9,
      23,
      4,
      3,
      18,
      1,
      1,
      50
    ],
    [
      "Lutte",
      10,
      10,
      20,
      2,
      2,
      12,
      1,
      1,
      38
    ],
    [
      "Natation",
      19,
      19,
      38,
      7,
      3,
      70,
      2,
      2,
      122
    ],
    [
      "Pétanque",
      10,
      10,
      20,
      2,
      2,
      10,
      1,
      1,
      36
    ],
    [
      "Rugby à 7 (h)",
      12,
      12,
      24,
      5,
      2,
      20,
      1,
      1,
      53
    ],
    [
      "Taekwondo",
      12,
      12,
      24,
      3,
      3,
      30,
      1,
      1,
      62
    ],
    [
      "Tennis",
      6,
      6,
      12,
      2,
      2,
      58,
      1,
      1,
      76
    ],
    [
      "Tennis de Table (h/f)",
      6,
      6,
      12,
      2,
      2,
      28,
      1,
      1,
      46
    ],
    [
      "Volley-ball",
      14,
      14,
      28,
      6,
      2,
      27,
      1,
      2,
      66
    ],
      []
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

export default DelegationParDisciplineMadagascar;
