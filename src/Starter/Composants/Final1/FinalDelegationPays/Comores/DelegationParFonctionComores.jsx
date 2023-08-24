import React, { useState } from 'react';
import url from '../../../../urlHtpp';

const DelegationParFonctionComores = () => {
  const columns = [
    "FONCTION",
    "NOMBRES DE PERSONNES"
  ];
  const rows = [
    [
      "Toutes Fonctions",
      327
    ],
    [
      "Athlètes",
      201
    ],
    [
      "Staff",
      82
    ],
    [
      "VIP",
      19
    ],
    [
      "VVIP",
      8
    ],
    [
      "Protocole"
    ],
    [
      "Effectif hors quota",
      17
    ]
  ];
  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? rows : rows.slice(0, 1);
  const firstRowStyle = {
    fontWeight: 'bold',
  };

  const tableStyle = {
    width: '500px',
    margin: 'auto', // Centrer horizontalement
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
    width: 'auto',
    whiteSpace: 'nowrap',
  };
  const buttonStyle = {
    backgroundColor: expanded ? '#7d240c' : '#973116',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  
  const [dataMADA,setDataMADA] = useState([]) 
  const getListe = () => {
    setExpanded(!expanded)
    console.log("ENTRER")
    fetch(url.urlHtpp + "repartition-discipline-delegation/repartition/Comores", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => { console.log(data.data), setDataMADA(data.data) })
      .catch(error => { console.log(error) })
  }
  return (
    <div style={{ marginTop: '20px' }}>
    <table style={tableStyle}>
      <thead>
      <tr>
          <td colSpan={columns.length} onClick={() => setExpanded(!expanded)}>
          <button
        style={buttonStyle}
        onClick={getListe}
      >
        {expanded ? '-' : '+'} {expanded ? 'Réduire' : 'Afficher plus'}
      </button>          </td>
        </tr>
        <tr>
          {columns.map((column, index) => (
            <th key={index} style={{ ...thStyle, textAlign: 'center' }}> {/* Ajout du style textAlign */}
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataMADA.map((row, rowIndex) => (
        <tr key={rowIndex}>
          <td>{row.fonction}</td>
          <td>{row.nbr_personne}</td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
  );
  

};

export default DelegationParFonctionComores;
