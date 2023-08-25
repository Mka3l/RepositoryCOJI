import React, { useState } from 'react';

const SystemeInformation = () => {
  const columns = [
    "Commission",
        "Résponsable",
        "Téléphone",
        "e-mail"
  ];

  const rows = [
    [
        "SYSTÈME D'INFORMATION",
        "ANDRIAMAMITIANA Hasiniaina",
        "0348124245",
        "hasinandriamamitiana@gmail.com"
    ],
    [
        "SYSTÈME D'INFORMATION",
        "IBE Julino Hanitrarivo",
        "034 39 693 33 ",
        "julino.ibe@hotmail.com "
    ],
    [
        "SYSTÈME D'INFORMATION",
        "Tahiry RAJAONARISOA",
        "034 17 847 23",
        "dgovt@mndpt.gov.mg"
    ],
    [
        "SYSTÈME D'INFORMATION",
        "Rado ANDRIANEKENA",
        "034 84 585 38",
        "rado.marius@gmail.com"
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
export default SystemeInformation;
