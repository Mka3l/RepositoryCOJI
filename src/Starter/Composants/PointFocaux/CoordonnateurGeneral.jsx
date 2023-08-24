import React, { useState } from 'react';

const CoordonnateurGeneral = () => {
  const columns = [
    "COMMISSION",
    "Responsable",
    "Telephone",
    "e-mail"
  ];

  const rows = [
    [
        "Coordonnateur Général",
        "Marie Michelle Sahondrarimalala",
        null,
        "jadisoa@yahoo.fr"
    ],
    [
        "Coordonnateur Général",
        "Zely Arivelo RANDRIAMANANTANY",
        null,
        "zrandriamanantany@yahoo.fr"
    ],
    [
        "Coordonnateur Général",
        "Hasina Razafindrakoto",
        "034 05 522 91",
        "hrazafindrakoto@gmail.com"
    ]
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
export default CoordonnateurGeneral;
