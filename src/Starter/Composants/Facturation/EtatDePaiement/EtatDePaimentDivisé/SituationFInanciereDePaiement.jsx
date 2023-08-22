import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SituationFinanciereDePaiment = () => {
  const [data, setData] = useState({
    n: 1,
    Hotels: "LE GRAND MELLIS",
    montantProForma: 355814400,
    montantFacture: 355814400,
    ecartFactureProForma: 0,
    firstAccount: 124535039.99999999,
    receptionFacture: null,
    controlePiece: null,
    disponibiliteSoldes: null,
    validationPaiement: null,
    paiementFirstAccount: null,
    secondAccount: 124535039.99999999,
    receptionFacture: null,
    controlePiece: null,
    disponibiliteSoldes: null,
    validationPaiement: null,
    paiementSecondAccount: null,
    resteAPayer: 106744320,
    receptionFacture: null,
    controlePiece: null,
    disponibiliteSoldes: null,
    validationPaiement: null,
    paiementResteAPayer: null,
  })
  // const [data, setData] = useState({
  //   n: "",
  //   Hotels: "",
  //   montantProForma: "",
  //   montantFacture: "",
  //   ecartFactureProForma: "",
  //   firstAccount: "",
  //   receptionFacture: null,
  //   controlePiece: null,
  //   disponibiliteSoldes: null,
  //   validationPaiement: null,
  //   paiementFirstAccount: null,
  //   secondAccount: "",
  //   receptionFacture: null,
  //   controlePiece: null,
  //   disponibiliteSoldes: null,
  //   validationPaiement: null,
  //   paiementSecondAccount: null,
  //   resteAPayer: 106744320,
  //   receptionFacture: null,
  //   controlePiece: null,
  //   disponibiliteSoldes: null,
  //   validationPaiement: null,
  //   paiementResteAPayer: null,
  // })
  const columns = [
    "N°",
    "Hotels ",
    "Montant pro-forma (Ariary)",
    "Montant Facture (Ariary)",
    "Ecart entre Facture et Pro-forma",
    "1 ère acomptes (35%) (Ariary)",
    "Reception facture 1ère acomptes ",
    "Contrôle pièce 1ère acomptes ",
    "disponibilité de soldes",
    "Validation paiement 1ère acomptes ",
    "Paiement 1ère acomptes ",
    "2ème acomptes (35%) (Ariary)",
    "Récéption facture 2ème acomptes ",
    "Contrôle pièce 2ème acomptes ",
    "disponibilité de soldes",
    "Validation paiement 2ème acomptes ",
    "Paiment 2ème acomptes ",
    "Restes à payer (30%) (Ariary)",
    "Récéption facture RAP ",
    "Contrôle pièces RAP ",
    "Validation paiement RAP ",
    "Paiement RAP "
  ];
  const rows = [
    [
      data.n,
      data.Hotels,
      data.montantProForma,
      data.montantFacture,
      data.ecartFactureProForma,
      data.firstAccount,
      data.receptionFacture,
      data.controlePiece,
      data.disponibiliteSoldes,
      data.validationPaiement,
      data.paiementFirstAccount,
      data.secondAccount,
      data.receptionFacture,
      data.controlePiece,
      data.disponibiliteSoldes,
      data.validationPaiement,
      data.paiementSecondAccount,
      data.resteAPayer,
      data.receptionFacture,
      data.controlePiece,
      data.disponibiliteSoldes,
      data.validationPaiement,
      data.paiementResteAPayer,
    ]
  ];

  useEffect(() => {

  });
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const columnRanges = [
    { start: 0, end: 4 },
    { start: 5, end: 16 },
    { start: 17, end: 20 },
    
  ]; // Personnalisez les plages de colonnes ici

  const visibleColumns = columns.slice(columnRanges[currentIndex].start, columnRanges[currentIndex].end + 1);

  const [rowsToShow, setRowsToShow] = useState(
    rows.map(row =>
      row.slice(columnRanges[currentIndex].start, columnRanges[currentIndex].end + 1)
    )
  );

  const showNextColumns = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < columnRanges.length) {
      setCurrentIndex(nextIndex);
      setCheckboxStates(rows.map(row => row.map(() => false))); // Réinitialiser les états des cases à cocher
      const newRowsToShow = rows.map(row =>
        row.slice(columnRanges[nextIndex].start, columnRanges[nextIndex].end + 1)
      );
      setRowsToShow(newRowsToShow);
    }
  };
  const showPreviousColumns = () => {
    const previousIndex = currentIndex - 1;
    if (previousIndex >= 0) {
      setCurrentIndex(previousIndex);
      setCheckboxStates(rows.map(row => row.map(() => false))); // Réinitialiser les états des cases à cocher
      const newRowsToShow = rows.map(row =>
        row.slice(columnRanges[previousIndex].start, columnRanges[previousIndex].end + 1)
      );
      setRowsToShow(newRowsToShow);
    }
  };

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
  const buttonStyle2 = {
    marginBotton: '12px',
    backgroundColor: expanded ? '#7d240c' : '#973116',
    color: 'white',
    border: 'none',
    float: 'right',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginRight: '10px'
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
        <>
          
          <button style={buttonStyle2} onClick={showNextColumns}>Suivants</button>
          <button style={buttonStyle2} onClick={showPreviousColumns}>Précédents</button>
          <table style={tableStyle}>
            <thead>
              <tr>
                {visibleColumns.map((column, index) => (
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
                     {(rowIndex >= 0 && rowIndex <= 83) &&
                    ((cellIndex >= 12 && cellIndex <= 13) ||
                      (cellIndex >= 12 && cellIndex <= 16) ||
                      (cellIndex >= 18 && cellIndex <= 21)) ? (
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
        </>
      )}
    </div>
  );

};
export default SituationFinanciereDePaiment;
