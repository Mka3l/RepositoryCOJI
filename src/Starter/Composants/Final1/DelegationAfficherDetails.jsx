import React, { useState,useEffect,useRef } from 'react';
import url from '../../urlHtpp';
const DelegationAfficherDetails = () => {
  const columns = [
    "Disciplines (19)",
    "Madagascar",
    "Comores",
    "La Réunion",
    "Maldives",
    "Maurice",
    "Mayotte",
    "Seychelles",
    "Total"
  ]

  const [delegationPaysDiscipline, setDelegationPaysDiscipline] = useState([]);
  const [getPLAN,setGetPlan] = useState(true)

  useEffect(()=>{
    console.log("ENTRER")
    fetch(url.urlHtpp+"delegation-pays-discipline",{
      method:'GET',
      headers:{'Content-Type':'application/json'},
    })
    .then(response => response.json())
    .then(data=>{console.log(data.data),setDelegationPaysDiscipline(data.data)})
    .catch(error=>{console.log(error)})
  },[getPLAN])

  const [expanded, setExpanded] = useState(false);
  const firstRowStyle = {
    fontWeight: 'bold',
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
    <div style={{ marginTop: '20px' }}>
      <button
        style={buttonStyle} // Utiliser le style du bouton correct
        onClick={() => setExpanded(!expanded)}
      >
        <b>{expanded ? '-' : '+'}</b> {expanded ? 'Réduire' : 'Afficher plus'}
      </button>
      {expanded && (
        <table style={tableStyle}>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index} style={thStyle}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {delegationPaysDiscipline.map((row, rowIndex) => (
              <tr key={rowIndex}>
                  <td  style={tdStyle}> {row.nom_discipline}</td>
                  <td  style={tdStyle}>{row.total_madagacar}</td>
                  <td  style={tdStyle}>{row.total_comores}</td>
                  <td  style={tdStyle}>{row.total_reunion}</td>
                  <td  style={tdStyle}>{row.total_mayottes}</td>
                  <td  style={tdStyle}>{row.total_seychelles}</td>
                  <td  style={tdStyle}>{row.total_maldives}</td>
                  <td  style={tdStyle}>{row.total_maurice}</td>
                  <td  style={{...tdStyle, fontWeight:'700'}} >{row.totaldiscipline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};




export default DelegationAfficherDetails;
