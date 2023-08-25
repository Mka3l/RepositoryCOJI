import React, { useState } from 'react';

const Partenariat = () => {
  const columns = [
    "Commission",
        "Résponsable",
        "Téléphone",
        "e-mail"
  ];

  const rows = [
    [
        "PARTENARIAT",
        "Arlette RAHARIJAONA",
        "032 04 203 98",
        "rahajarijaonaarlette@gmail.com"
    ],
    [
        "PARTENARIAT",
        "Finidi Désiré RATEFIARISON",
        "034 41 876 63",
        "finididesire@gmail.com"
    ],
    [
        "PARTENARIAT",
        "Olitiana GONTARE",
        "034 92 684 00",
        "gontare.olitiana@gmail.com"
    ],
    [
        "PARTENARIAT",
        "Anne-Muriel RAHAINGOJANTOVO",
        "034 48 978 32",
        "annemuriel.rah@gmail.com"
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
export default Partenariat;
