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


  // const rows = [
  //   [
  //     "Total",
  //     287,
  //     23,
  //     97,
  //     36,
  //     97,
  //     17,
  //     71,
  //     628
  //   ],
  //   [
  //     "Badminton (h/f)",
  //     82,
  //     5,
  //     17,
  //     19,
  //     17,
  //     13,
  //     17,
  //     170
  //   ],
  //   [
  //     "Basket",
  //     107,
  //     44,
  //     47,
  //     32,
  //     47,
  //     46,
  //     47,
  //     370
  //   ],
  //   [
  //     "Boxe (h)",
  //     32,
  //     13,
  //     20,
  //     0,
  //     20,
  //     0,
  //     20,
  //     105
  //   ],
  //   [
  //     "Cyclisme ",
  //     80,
  //     10,
  //     24,
  //     0,
  //     24,
  //     10,
  //     13,
  //     161
  //   ],
  //   [
  //     "Football (h)",
  //     67,
  //     28,
  //     31,
  //     0,
  //     31,
  //     31,
  //     31,
  //     219
  //   ],
  //   [
  //     "Haltérophilie (h/f)",
  //     54,
  //     9,
  //     29,
  //     0,
  //     29,
  //     7,
  //     29,
  //     157
  //   ],
  //   [
  //     "Handball",
  //     62,
  //     37,
  //     44,
  //     42,
  //     44,
  //     44,
  //     44,
  //     317
  //   ],
  //   [
  //     "Judo (h/f)",
  //     77,
  //     13,
  //     38,
  //     0,
  //     38,
  //     31,
  //     38,
  //     235
  //   ],
  //   [
  //     "Kick boxing",
  //     45,
  //     0,
  //     20,
  //     0,
  //     20,
  //     15,
  //     0,
  //     100
  //   ],
  //   [
  //     "Karaté",
  //     50,
  //     10,
  //     33,
  //     0,
  //     32,
  //     17,
  //     32,
  //     174
  //   ],
  //   [
  //     "Lutte",
  //     38,
  //     9,
  //     26,
  //     0,
  //     26,
  //     0,
  //     0,
  //     99
  //   ],
  //   [
  //     "Natation",
  //     122,
  //     15,
  //     52,
  //     19,
  //     52,
  //     0,
  //     51,
  //     311
  //   ],
  //   [
  //     "Pétanque",
  //     36,
  //     17,
  //     26,
  //     0,
  //     26,
  //     13,
  //     26,
  //     144
  //   ],
  //   [
  //     "Rugby à 7 (h)",
  //     53,
  //     0,
  //     33,
  //     0,
  //     33,
  //     31,
  //     0,
  //     150
  //   ],
  //   [
  //     "Taekwondo",
  //     62,
  //     7,
  //     23,
  //     10,
  //     21,
  //     5,
  //     0,
  //     128
  //   ],
  //   [
  //     "Tennis",
  //     76,
  //     9,
  //     18,
  //     12,
  //     18,
  //     13,
  //     18,
  //     164
  //   ],
  //   [
  //     "Tennis de Table (h/f)",
  //     46,
  //     7,
  //     18,
  //     17,
  //     18,
  //     12,
  //     18,
  //     136
  //   ],
  //   [
  //     "Volley-ball",
  //     66,
  //     19,
  //     39,
  //     38,
  //     39,
  //     39,
  //     39,
  //     279
  //   ],
  // ];
  const [expanded, setExpanded] = useState(false);
  // const rowsToShow = expanded ? rows : rows.slice(0, 1);
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
