import React, { useState } from 'react';

const Evenementiel = () => {
  const columns = [
    "Commission",
        "Résponsable",
        "Téléphone",
        "e-mail"
  ];

  const rows = [
    [
        "EVENEMENTIEL",
        "RAZANAJATOVO Niry Princy",
        "034 00 136 47",
        "niriprincy@gmail.com"
    ],
    [
        "EVENEMENTIEL",
        "Gentiane ANDRIANISA",
        "034 00 132 08",
        "gentybox@live.fr"
    ],
    [
        "EVENEMENTIEL",
        "Noroanja RAKOTOJOELIMARIA",
        "034 00 132 72 ",
        "noroanjarjm.driprm@gmail.com"
    ],
    [
        "EVENEMENTIEL",
        "Naina RANAIVO",
        "034 68 822 32",
        "naina.ranaivo@gmail.com"
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
export default Evenementiel;
