import React, { useState } from 'react';

const TableauRecapitulatifRepartitionHebergement = () => {
  const columns = [
    
    "MAYOTTE",
    "MALDIVES",
    "COMORES",
    "MADAGASCAR",
    "MAURICE",
    "LA REUNION",
    "SEYCHELLES",
    "VVIP\r\n&VIP",
    "OFFICIELS \r\nTECHNIQUES",
    "REPRESENTANT \r\nDES FEDERATIONS",
    "ANTI-\r\nDOPAGE",
    "TOTAL"
  ];
  const rows = [
    [
        358,
        231,
        289,
        670,
        633,
        646,
        506,
        122,
        1020,
        118,
        9,
        4602
      ]
  ];
  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? rows : rows.slice(0, 1);
  const firstRowStyle = {
    fontWeight: 'bold',
    color: '#333', // Couleur de police plus foncée
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
              <th className='align-center' key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowsToShow.map((row, rowIndex) => (
            <tr key={rowIndex} style={rowIndex === 0 ? firstRowStyle : {}}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="table-cell-auto text-center">
                  {typeof cell === 'number'
                    ? cell.toLocaleString() // Formate les nombres avec des séparateurs de milliers
                    : cell}
                </td>
              ))}
            </tr>
          ))}
          {/* {!expanded ? (
            <tr>
              <td colSpan={columns.length} className="expand-button" onClick={() => setExpanded(true)}>
                <b>+</b> Afficher plus
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan={columns.length} className="expand-button" onClick={() => setExpanded(false)}>
                <b>-</b> Réduire
              </td>
            </tr>
          )} */}
        </tbody>
      </table>
    </div>
  );
};

export default TableauRecapitulatifRepartitionHebergement;
