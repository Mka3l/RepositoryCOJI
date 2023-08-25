import React, { useState } from 'react';

const Securite = () => {
  const columns = [
    "Commission",
        "Résponsable",
        "Téléphone",
        "e-mail"
  ];

  const rows = [
    [
        "SECURITE",
        "Commissaire de Police Benalaza Dias",
        'O348739270',
        "diasbenalaza@gmail.com"
    ],
    [
        "SECURITE",
        "Commissaire Divisionnaire de Police LEBIRIA Tolojara Rufin",
        "034 38 197 80",
        "lebiria08@gmail.com"
    ],
    [
        "SECURITE",
        "Inspecteur Général de Police ANDRIAMAMPIONONA Jean Rolland",
        "034 05 998 05",
        "ajeanrolland@gamil.com"
    ],
    [
        "SECURITE",
        "Commandant RAZAFINDRAJOELINA Honore Prosper",
        "034 99 802 83",
        "ahs.fanilo@gmail.com"
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
export default Securite;
