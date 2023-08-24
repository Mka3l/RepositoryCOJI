import React, { useState } from 'react';

const VoletJeunesse = () => {
  const columns = [
    "COMMISSION",
    "Responsable",
    "Telephone",
    "e-mail"
  ];

  const rows = [
    [
        "VOLET JEUNESSE",
        "TIFANA Marie Ange",
        "034 82 988 90",
        "angetifana@gmail.com"
    ],
    [
        "VOLET JEUNESSE",
        "RANJOHANISON Livaniaina Saholy",
        "034 63 097 15",
        "livaraberaoka@gmail.com"
    ],
    [
        "VOLET JEUNESSE",
        "RANAIVOSOA Faniry Domoina",
        "034 50 913 79",
        "fankky@gmail.com"
    ],
    [
        "VOLET JEUNESSE",
        "RAZANAMASY Tsikitsiky",
        "034 80 174 51",
        "tsikitsikyrazanamasy@gmail.com"
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
export default VoletJeunesse;
