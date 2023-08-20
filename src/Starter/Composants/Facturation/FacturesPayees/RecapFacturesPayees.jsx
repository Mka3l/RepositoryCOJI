import React, { useState } from 'react';

const RecapFacturesPayees = () => {
  const columns = [
    "NOMBRE \r\nHOTELS ",
    "NOMBRE TOTAL DE \r\nSEJOUR(S)",
    "NOMBRE \r\n TOTAL DE  \r\nLIT(S)",
    "NBRE \r\nTOTAL DE PERSONNES",
    "COÛT TOTAL\r\nHEBERGEMENT\r\n(ARIARY)",
    "NBRE TOTAL DE PLATS",
    "COÛT TOTAL\r\nRESTAURATION\r\n(ARIARY)",
    "COÛT TOTAL\r\nPROFORMA\r\n(ARIARY)",
    "COÛT  TOTAL\r\nFACTURE\r\n(ARIARY)",
    "TOTAL ECART FACTURE ET PROFORMAT",
    "TOTAL 1 ère ACOMPTES (35%)\r\n(ARIARY)",
    "NOMBRE\r\nFACTURE\r\n1ère ACOMPTES\r\nRECUE",
    "\r\nNOMBRE\r\nFACTURE\r\n1ère ACOMPTES\r\nCONTROLEE",
    "NOMBRE\r\nFACTURE\r\n1ère ACOMPTES\r\nVALIDEE ",
    "NOMBRE\r\nFACTURE\r\n1ère ACOMPTES\r\nPAYEE",
    "TOTAL \r\n2ème ACOMPTES (35%)\r\n(ARIARY)",
    "NOMBRE\r\nFACTURE\r\n2ème ACOMPTES\r\nRECUE",
    "\r\nNOMBRE\r\nFACTURE\r\n2ème ACOMPTES\r\nCONTROLEE",
    "NOMBRE\r\nFACTURE\r\n2ème ACOMPTES\r\nVALIDEE ",
    "NOMBRE\r\nFACTURE\r\n2ème ACOMPTES\r\nPAYEE",
    "TOTAL\r\nRESTES A PAYER \r\n(30%)\r\n(ARIARY)\r\n"
  ]
  const rows = [
    [
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-"
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
              <th className='text-center' key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowsToShow.map((row, rowIndex) => (
            <tr key={rowIndex} style={rowIndex === 0 ? firstRowStyle : {}}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={`table-cell-auto ${typeof cell === 'number' ? 'center' : 'center'}`}>
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

export default RecapFacturesPayees;
