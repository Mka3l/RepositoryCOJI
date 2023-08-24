import React, { useState } from 'react';

const RecapEtatOccupation = ({data}) => {
  const columns = [
      "SITE D'HEBERGEMENT",
      "CAPACITE \r\nTOTALE (EN LITS)",
      "LITS \r\nOCCUPES",
      "LITS \r\nRESTANTS",
      "TAUX D'OCCUPATION (%)"
    ];

    // "nombre_total":79,
    // "capacite_total_lit":12042,
    // "nombre_lit_occupe":4602,
    // "taux_occupation":38
    
  const rows = [
    [
      79,
      12042,
      4602,
      7050,
      38
    ]
  ];
  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? rows : rows.slice(0, 1);
  const firstRowStyle = {
    fontWeight: 'bold', // Utiliser une valeur plus légère que 'bold'
    color: '#332', // Couleur de police
  };
  
  return (
    <div>
      <style>
        {`
          .table-cell-auto {
            width: auto;
            white-space: nowrap;
          }
          .expand-button {
            cursor: pointer;
          }
        `}
      </style>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className='text-center'>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowsToShow.map((row, rowIndex) => (
            <tr key={rowIndex} style={rowIndex === 0 ? firstRowStyle : {}}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={`table-cell-auto ${typeof cell === 'number' ? 'text-center' : ''}`}>
                {typeof cell === 'number'
                    ? cell.toLocaleString() // Formate les nombres avec des séparateurs de milliers
                    : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecapEtatOccupation;
