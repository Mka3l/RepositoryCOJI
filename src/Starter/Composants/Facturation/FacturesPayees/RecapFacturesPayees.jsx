import React, { useState } from 'react';

const RecapFacturesPayees = () => {
  const columns = [
    "NOMBRE HOTELS ",
    "NOMBRE TOTAL DE SEJOUR(S)",
    "NOMBRE TOTAL DE  LIT(S)",
    "NOMBRE TOTAL DE PERSONNES",
    "MONTANT TOTAL HEBERGEMENT (ARIARY)",
    "NOMBRE TOTAL DE PLATS",
    "MONTANT TOTAL RESTAURATION (ARIARY)",
    "MONTANT TOTAL PROFORMA (ARIARY)",
    "MONTANT  TOTAL FACTURE (ARIARY)",
    "TOTAL ECART FACTURE ET PROFORMAT",
    "TOTAL 1 ère ACOMPTES (35%) (ARIARY)",
    "NOMBRE FACTURE 1ère ACOMPTES RECUE",
    "NOMBRE FACTURE 1ère ACOMPTES CONTROLEE",
    "NOMBRE FACTURE 1ère ACOMPTES VALIDEE ",
    "NOMBRE FACTURE 1ère ACOMPTES PAYEE",
    "TOTAL 2ème ACOMPTES (35%) (ARIARY)",
    "NOMBRE FACTURE 2ème ACOMPTES RECUE",
    "NOMBRE FACTURE 2ème ACOMPTES CONTROLEE",
    "NOMBRE FACTURE 2ème ACOMPTES VALIDEE ",
    "NOMBRE FACTURE 2ème ACOMPTES PAYEE",
    "TOTAL RESTES A PAYER (30%) (ARIARY) "
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
    marginBottom: '0px'
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

export default RecapFacturesPayees;
