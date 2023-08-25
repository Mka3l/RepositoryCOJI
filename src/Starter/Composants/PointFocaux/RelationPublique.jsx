import React, { useState } from 'react';

const RelationPublique = () => {
  const columns = [
    "Commission",
        "Résponsable",
        "Téléphone",
        "e-mail"
  ];

  const rows = [
    [
        "RELATION PUBLIQUE",
        "RATSIVALAKA Cathy",
        "0340013575",
        "cathy.ratsivalaka@gmail.com"
    ],
    [
        "RELATION PUBLIQUE",
        "RANOROMARO Lova",
        "0340013400"
    ],
    [
        "RELATION PUBLIQUE",
        "RAJAONARY Cédric ",
        "034 00 136 03"
    ],
    [
        "RELATION PUBLIQUE",
        "HARIMANDIANINA Nanou ",
        "034 00 135 81",
        "nanouharime@yahoo.fr"
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
export default RelationPublique;
