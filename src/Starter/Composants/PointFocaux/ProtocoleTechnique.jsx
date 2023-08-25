import React, { useState } from 'react';

const ProtocoleTechnique = () => {
    const columns = [
      "Commission",
      "Résponsable",
      "Téléphone",
      "e-mail"
    ];

    const rows = [
        [
            "PROTOCOLE TECHNIQUE",
            "RASOAMAMPIONONA Walter Bodo",
            "0327491525",
            "jbodowalter@gmail.com"
        ],
        [
            "PROTOCOLE TECHNIQUE",
            "Nirina Samuel RANDRIANASOLO",
            "0340510853",
            "nirisamu@gmail.com"
        ],
        [
            "PROTOCOLE TECHNIQUE",
            "Estellah Nadette RASOAMANAHIRANA",
            "0348567774",
            "estellahnadette@gmail.com"
        ],
        [
            "PROTOCOLE TECHNIQUE",
            "Ralph TOVONAY",
            "034 45 332 65",
            "tsiboutock@yahoo.fr"
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
export default ProtocoleTechnique;
