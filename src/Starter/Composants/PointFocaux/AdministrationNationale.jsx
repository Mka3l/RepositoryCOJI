import React, { useState } from 'react';

const AdministrationNationale = () => {
  const columns = [
    "COMMISSION",
    "Responsable",
    "Telephone",
    "e-mail"
  ];

  const rows = [
    [
      "ADMINISTRATION NATIONALE",
      "Fara Hanta ANDRIAMBELOMANGA",
      "034 05 689 40",
      "ahantafara@gmail.com"
  ],
  [
      "ADMINISTRATION NATIONALE",
      "RABEARY Rina",
      "034 13 210 84",
      "rabearyrinah@gmail.com"
  ],
  [
      "ADMINISTRATION NATIONALE",
      "HANITRINIAINA Lynda",
      "034 18 012 27",
      "lyndahanitriniaina@gmail.com"
  ],
  [
      "ADMINISTRATION NATIONALE",
      "RANTOANDRO Tokiniaina",
      "034 07 041 23",
      "spcimj@mjs.gov.mg"
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


export default AdministrationNationale;
