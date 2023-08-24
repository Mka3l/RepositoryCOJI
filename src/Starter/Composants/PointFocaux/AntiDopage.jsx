import React, { useState } from 'react';

const AntiDopage = () => {
    const columns = [
        "COMMISSION",
        "Responsable",
        "Telephone",
        "e-mail"
    ];

    const rows = [
        [
            "ANTI DOPAGE",
            "Bianca ROBERT RASOANTSEHENOMANANA",
            "034 20 353 01",
            "biancaroro@yahoo.fr / radonch2@gmail.com"
        ],
        [
            "ANTI DOPAGE",
            "Radonirina Zafinjato RAKOTOMANGA",
            "034 15 631 11",
            "radonch2@gmail.com"
        ],
        [
            "ANTI DOPAGE",
            "Ny Aina RANDRIAMIARISOA",
            "034 11 143 10",
            "nyainarandriamiarisoa@gmail.com"
        ],
        [
            "ANTI DOPAGE",
            "Marie Daniella RASOA",
            "032 92 824 66",
            "rrdaniella1@gmail.com"
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

export default AntiDopage;
