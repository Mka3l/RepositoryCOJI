import React, { useState } from 'react';

const RecapFacturesImpayees = () => {
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
  ];
  const rows = [
    [
      33,
      530,
      986,
      1154,
      "-",
      "-",
      "-",
      1363062520,
      1366428520,
      3366000,
      478249982,
      33,
      33,
      0,
      0,
      478249982,
      0,
      0,
      0,
      0,
      400868556
    ]
  ];
  const [expanded, setExpanded] = useState(false);
  const [showAllColumns, setShowAllColumns] = useState(false);
  const rowsToShow = expanded ? rows : [];


  const buttonStyle = {
    backgroundColor: expanded ? '#7d240c' : '#973116',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '50px',

    
  };
  const buttonStyle2 = {
    backgroundColor: expanded ? '#7d240c' : '#973116',
    color: 'white',
    border: 'none',
    float: 'right',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const thStyle = {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
    backgroundColor: '#f5f5f5',
  };

  const tdStyle = {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
  };

  return (
    
    <div>
  {/* Bouton pour afficher/masquer les détails */}
  <button
    style={buttonStyle}
    onClick={() => setExpanded(!expanded)}
  >
    {expanded ? '-' : '+'} {expanded ? 'Réduire' : 'Afficher plus de détails'}
  </button>
  
  {/* Bouton pour afficher/masquer les colonnes 8 à 12 */}
  {expanded && (
    <div>
      <button
        style={buttonStyle2}
        onClick={() => setShowAllColumns(!showAllColumns)}
      >
        {showAllColumns ? 'Masquer colonnes 11-21' : 'Afficher colonnes 11-21'}
      </button>
    
      <table style={tableStyle}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              // Modifie les conditions pour afficher les colonnes en fonction des états des boutons
              ((showAllColumns && index >= 10 && index <= 21) ||
                (!showAllColumns && index <= 9)) && (
                <th key={index} style={thStyle}>
                  {column}
                </th>
              )
            ))}
          </tr>
        </thead>
        <tbody>
          {rowsToShow.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                // Modifie les conditions pour afficher les colonnes en fonction des états des boutons
                ((showAllColumns && cellIndex >= 10 && cellIndex <= 21) ||
                  (!showAllColumns && cellIndex <= 9)) && (
                  <td key={cellIndex} style={cellIndex === 0 ? (rowIndex === 0 ? { ...tdStyle, textAlign: 'right' } : { ...tdStyle, textAlign: 'center' }) : { ...tdStyle, textAlign: 'center' }}>
              {typeof cell === 'number'
                  ? cell.toLocaleString()
                  : rowIndex >= 1 && cellIndex === 0 // Vérification pour les lignes à partir de la troisième et première cellule (nom de fonction)
                    ? <i>{cell}</i> // Appliquez le style italique
                    : cell}
              </td>
                )
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>
  );
};

export default RecapFacturesImpayees;
