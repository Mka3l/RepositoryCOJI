import React, { useState } from 'react';

const TableauRecapitulatifEtatHebergement = () => {
  const columns = [
    "SITE D'HEBERGEMENT",
    "CAPACITE \r\nTOTALE (EN LITS)",
    "LITS \r\nOCCUPES",
    "LITS \r\nRESTANTS",
    "TAUX D'OCCUPATION"
  ];
  const rows = [
    [
        79,
        5800,
        4455,
        1345,
        0.7681034482758621
      ]
  ];
  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? rows : rows.slice(0, 1);

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
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowsToShow.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={`table-cell-auto ${typeof cell === 'number' ? 'text-right' : ''}`}>
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

export default TableauRecapitulatifEtatHebergement;
