import React, { useState } from 'react';

const Hebergement = () => {
  const columns = [
    "Commission",
    "Résponsable",
    "Téléphone",
    "e-mail"
  ];

  const rows = [
    [
        "HEBERGEMENT",
        "JACQUES GAEL ANDRIAMALAZAVOLA",
        "0340557545",
        "andriamalazavola@gmail.com"
    ],
    [
        "HEBERGEMENT",
        "Rakotoson Tantely Franck",
        "0341228439"
    ],
    [
        "HEBERGEMENT",
        "Andriamiharisoa Heritsitohaina Jean",
        "0341904990"
    ],
    [
        "HEBERGEMENT",
        "Ralison Kaël Navalona ",
        "0349927069"
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
export default Hebergement;
