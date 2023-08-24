import React, { useState } from 'react';

const TresorerieGenerale = () => {
  const columns = [
    "COMMISSION",
    "Responsable",
    "Telephone",
    "e-mail"
  ];

  const rows = [
    [
        "TRESORERIE GENERALE",
        "RAKOTOSON ZINA ALITERA",
        "034 30 281 81",
        "rakotosonzina@gmail.com"
    ],
    [
        "TRESORERIE GENERALE",
        "RAZAFIMAHATRATRA LALANIRINA",
        "034 05 570 00",
        "rzmlala@gmail.com"
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
export default TresorerieGenerale;
