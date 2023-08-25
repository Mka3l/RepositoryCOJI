import React, { useState } from 'react';

const DirectionExecutive = () => {
  const columns = [
    "Commission",
        "Résponsable",
        "Téléphone",
        "e-mail"
  ];

  const rows = [
    [
        "DIRECTION EXECUTIVE",
        "Eric Luciano RAKOTOARIMANGA",
        "034 60 637 16",
        "eric3f@gmail.com"
    ],
    [
        "Président COJI",
        "André Haja RESAMPA",
        null,
        "mjs.resampa@gmail.com"
    ],
    [
        "2e Vice Président",
        "Mercédès RATSIRAHONANA",
        "034 07 548 48",
        "der.prm@outlook.com"
    ],
    [
        "3e Vice Président",
        "Lovatiako RALAIVAO",
        "034 05 830 00",
        "lovamd@gmail.com"
    ],
    [
        "4e Vice Président",
        "Organès Rolland RAKOTOVAO",
        "038 15 996 01"
    ],
    [
        "Directeur Exécutif COJI",
        "Rosa Rakotozafy",
        null,
        "rosarakotozafy@gmail.com"
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
export default DirectionExecutive;
