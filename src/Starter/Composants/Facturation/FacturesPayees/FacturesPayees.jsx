import React, { useState } from 'react';

const FacturesPayees = () => {
  const columns = [
    "N°",
    "HOTELS ",
    "RIB",
    "ZONES",
    "SEJOUR(S)",
    "LIT(S)",
    "NBRE DE PERSONNES",
    "PRIX UNITAIRE HEBERGEMENT\r\n(ARIARY)",
    "COÛT \r\nHEBERGEMENT\r\n(ARIARY)",
    "NBRE DE PLATS",
    "PRIX UNITAIRE PLATS\r\n(ARIARY)",
    "COÛT \r\nRESTAURATION\r\n(ARIARY)",
    "COÛT \r\nPROFORMA\r\n(ARIARY)",
    "COÛT \r\nFACTURE\r\n(ARIARY)",
    "Ecart\r\nentre Facture et Proforma",
    "N°FACTURE",
    "1 ère ACOMPTES (35%)\r\n(ARIARY)",
    "RECEPTION \r\nFACTURE\r\n1ère ACOMPTES ",
    "\r\nCONTRÔLE\r\nPIECE\r\n1ère ACOMPTES ",
    "VALIDATION\r\nPAIEMENT\r\n1ère ACOMPTES ",
    "PAIEMENT\r\n1ère ACOMPTES ",
    "2ème ACOMPTES (35%)\r\n(ARIARY)",
    "RECEPTION \r\nFACTURE\r\n2ème ACOMPTES ",
    "\r\nCONTRÔLE\r\nPIECE\r\n2ème ACOMPTES ",
    "VALIDATION\r\nPAIEMENT\r\n2ème ACOMPTES ",
    "PAIEMENT\r\n2ème ACOMPTES ",
    "RESTES \r\nA PAYER \r\n(30%)\r\n(ARIARY)",
    "RECEPTION \r\nFACTURE\r\nRAP ",
    "\r\nCONTRÔLE\r\nPIECE\r\nRAP ",
    "VALIDATION\r\nPAIEMENT\r\nRAP ",
    "PAIEMENT\r\nRAP "
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

  const [checkboxStates, setCheckboxStates] = useState(
    rows.map(row => row.map(() => false))
  );

  const handleCheckboxChange = (rowIndex, cellIndex) => {
    const updatedCheckboxStates = checkboxStates.map((row, rIndex) =>
      rIndex === rowIndex ? row.map((cell, cIndex) => (cIndex === cellIndex ? !cell : cell)) : row
    );
    setCheckboxStates(updatedCheckboxStates);
  };

  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? rows : [];
 const expandButtonStyle = {
    cursor: 'pointer',
    backgroundColor: expanded ? '#7d240c' : '#973116',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
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
    <div>
      <button
        style={expandButtonStyle}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? '-' : '+'} {expanded ? 'Réduire' : 'Afficher plus de détails'}
      </button>
      {expanded && (
        <table style={tableStyle}>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index} style={{ ...thStyle, textAlign: 'center' }}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowsToShow.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={{ ...tdStyle, textAlign: typeof cell === 'number' ? 'center' : 'center' }}>
                    {(rowIndex >= 1 && rowIndex <= 83) &&
                      ((cellIndex >= 17 && cellIndex <= 20) ||
                      (cellIndex >= 22 && cellIndex <= 25) ||
                      (cellIndex >= 27 && cellIndex <= 30)) ? (
                      <>
                        <input
                          type="checkbox"
                          checked={checkboxStates[rowIndex][cellIndex]}
                          onChange={() => handleCheckboxChange(rowIndex, cellIndex)}
                        />
                        {cell}
                      </>
                    ) : (
                      typeof cell === 'number'
                        ? cell.toLocaleString()
                        : cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>

  );
};
export default FacturesPayees;
