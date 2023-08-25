import React, { useState } from 'react';

const PromotionJeux = () => {
  const columns = [
    "Commission",
        "Résponsable",
        "Téléphone",
        "e-mail"
  ];

  const rows = [
    [
        "PROMOTION DES JEUX",
        "Antsa RASOLOFONIRIANA",
        "034 05 830 59",
        "arosolofonirina@fihariana.com"
    ],
    [
        "PROMOTION DES JEUX",
        "Houssen MAHAPANDRO",
        "034 13 450 28",
        "mahampandro@yahoo.fr"
    ],
    [
        "PROMOTION DES JEUX",
        "Valérie Zafindravaka",
        "032 05 035 92",
        "zafindravaka@gmail.com"
    ],
    [
        "PROMOTION DES JEUX",
        "Mirary Lalasoa VICTORINE",
        "034 11 398 38",
        "vmirarilalasoa002@gmail.com"
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
export default PromotionJeux;
