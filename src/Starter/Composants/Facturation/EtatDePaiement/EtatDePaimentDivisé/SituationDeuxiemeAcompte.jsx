import React, { useState, useEffect } from 'react';
import axios from 'axios';
const SituationDeuxiemeAcompte = () => {
  const [data, setFacto] = useState({
    n: "",
    Hotels: "",
    secondAccount: "",
    receptionFactureSecond: "",
    controlePieceSecond: "",
    validationPaiementSecond: "",    
    paiementSecondAccount: "",
    status: "",

  })
  const columns = [
    "N°",
    "Hotels ",
    "2ème acompte (35%) (Ariary)",
    "Reception facture 2ème acomptes ",
    "Contrôle pièces 2ème acomptes ",
    "Validation paiement 2ème acomptes ",
    "Paiement 2ème acomptes"
  ]
  const rows = [
    [
      data.n,
      data.Hotels,
      data.secondAccount,
      // data.receptionFactureSecond,
      data.controlePieceSecond,
      data.validationPaiementSecond,  
      data.paiementSecondAccount,
    ]
   ]

   useEffect(() => {
    axios.get('/secondData.json')  // Adjust the path as needed
      .then(response => {
        setFacto(response.data);
      })
      .catch(error => {
        console.error('Erreur de donnée:', error);
      });
  }, []);
const [checkboxStates, setCheckboxStates] = useState(
  rows.map((row, rowIndex) =>
  row.map((cell, cellIndex) => cellIndex === 4)
)
  );

  const handleCheckboxChange = (rowIndex, cellIndex) => {
    const updatedCheckboxStates = checkboxStates.map((row, rIndex) =>
      rIndex === rowIndex ? row.map((cell, cIndex) => (cIndex === cellIndex ? !cell : cell)) : row
    );
    setCheckboxStates(updatedCheckboxStates);
  };

  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? rows : [];

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
const buttonStyle = {
    marginBottom: '12px',
    backgroundColor: expanded ? '#7d240c' : '#973116',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

return (
  <div>
  <table style={tableStyle}>
    <thead>
      <tr>
        <td colSpan={columns.length}>
          <button
            style={buttonStyle}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? '-' : '+'} {expanded ? 'Réduire' : 'Afficher plus'}
          </button>
        </td>
      </tr>
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
              {(rowIndex >= 0 && rowIndex <= 83) &&
                (cellIndex >= 3 && cellIndex <= 7) ? (
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
</div>

);
};

export default SituationDeuxiemeAcompte;


