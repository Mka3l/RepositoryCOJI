import React, { useState } from 'react';

const CompetitionAccreditation = () => {
    const columns = [
      "Commission",
      "Résponsable",
      "Téléphone",
      "e-mail"
    ];

    const rows = [
        [
            "COMPETITION ET ACCREDITATION",
            "ANDRITERAKANDRIANA Aina",
            "0340583059",
            "ainadahoux@gmail.com\r\nandrianiainatiavinaarnaud@gmail.com"
        ],
        [
            "COMPETITION ET ACCREDITATION",
            "ANDRIANIAINA TIAVINA ARNAUD",
            "0346936251",
            "andrianiainatiavinaarnaud@gmail.com"
        ],
        [
            "COMPETITION ET ACCREDITATION",
            "Veloharinofy ANDRIANASOLOMIHAMINA",
            "0340013118",
            "harinofy@gmail.com"
        ],
        [
            "COMPETITION ET ACCREDITATION",
            "ANDRIANAMELANTSOA FINARITRA HELIAN PRIVAT",
            "034 05 830 60",
            "finaritraprivat@gmail.com"
        ],
    ]

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
export default CompetitionAccreditation;
