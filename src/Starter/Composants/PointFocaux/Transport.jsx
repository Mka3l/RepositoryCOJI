import React, { useState } from 'react';

const Transport = () => {
  const columns = [
    "COMMISSION",
    "Responsable",
    "Telephone",
    "e-mail"
  ];

  const rows = [
    [
        "TRANSPORT",
        "ANDRIANONY Henintsoa Naivo",
        "034 40 274 71"
    ],
    [
        "TRANSPORT",
        "RAKOTOARILALA Norosoa",
        "034 30 281 26",
        "nrakotoarilala@yahoo.fr"
    ],
    [
        "TRANSPORT",
        "HERIMANARIVO Gilberto",
        "034 00 135 09"
    ],
    [
        "TRANSPORT",
        "RAZAFINDRAZAKA Hasina",
        "034 00 135 08"
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
export default Transport;
