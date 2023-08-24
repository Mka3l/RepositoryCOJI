import React, { useState } from 'react';

const Restauration = () => {
  const columns = [
    "COMMISSION",
    "Responsable",
    "Telephone",
    "e-mail"
  ];

  const rows = [
    [
        "RESTAURATION",
        "HARINIRINA Rajohanesa Brice",
        "034 04 238 56",
        "harybrice2@gmail.com"
    ],
    [
        "RESTAURATION",
        "RANAIVOSON Miharisoa",
        "034 00 130 40"
    ],
    [
        "RESTAURATION",
        "RANDRIAMAHARIVONY Joharinivo",
        "034 80 184 02"
    ],
    [
        "RESTAURATION",
        "RABENIRAINY Bodo",
        "034 00 133 27"
    ],
  ];
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
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={tdStyle}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Restauration;
