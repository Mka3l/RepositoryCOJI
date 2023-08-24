import React, { useState } from 'react';

const Logistique = () => {
  const columns = [
    "COMMISSION",
    "Responsable",
    "Telephone",
    "e-mail"
  ];

  const rows = [
    [
        "LOGISTIQUE",
        "Michel Jonah Ramanantsoa",
        "034 05 830 08",
        "nyramanantsoa@yahoo.fr"
    ],
    [
        "LOGISTIQUE",
        "Janssen Edbert ANDRIAMBOLOLONA",
        "034 51 453 55",
        "janssen.edbert@gmail.com"
    ],
    [
        "LOGISTIQUE",
        "Lalaina Njato Andriamampionona",
        "034 22 794 55",
        "njatoandria@yahoo.fr"
    ],
    [
        "LOGISTIQUE",
        "Victorine RASOAMIADANA",
        "032 05 999 01"
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
export default Logistique;
