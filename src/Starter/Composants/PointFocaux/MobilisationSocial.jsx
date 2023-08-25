import React, { useState } from 'react';

const MobilisationSociale = () => {
  const columns = [
    "Commission",
        "Résponsable",
        "Téléphone",
        "e-mail"
  ];

  const rows = [
    [
        "MOBILISATION SOCIALE",
        "RAHAMEFY ANDRIANINAMALALA Valisoa Tomefy",
        "034 70 252 18",
        "tomefyrahamefy@gmail.com"
    ],
    [
        "MOBILISATION SOCIALE",
        "RASOLOMANANA Ny Hanitra Malalanirina",
        "034 41 314 40",
        "rasolomanananyhanitra@gmail.com"
    ],
    [
        "MOBILISATION SOCIALE",
        "RAZAFIARITSARA Ando Hanitriniala",
        "034 67 506 86",
        "razafiaritsara.a@gmail.com"
    ],
    [
        "MOBILISATION SOCIALE",
        "RAFANJAMAMPIONONA Niriniaina",
        "034 05 831 13",
        "fanjanirimamp@yahoo.fr"
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
export default MobilisationSociale;
