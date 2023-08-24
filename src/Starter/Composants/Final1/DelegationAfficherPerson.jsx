import React, { useState,useEffect,useRef } from 'react';
import url from '../../urlHtpp';
const DelegationAfficherPerson = () => {
  const columns = [
    "Numero ID",
    "Nom",
    "Prenom",
    "Categorie de badge",
    "Pays",
    "Fonction",
    "Nom de discipline",
    "Genre",
    "Numero de chambre",
    "application_status",
  ]
  const [delegationList, setDelegationList] = useState([]);
  const [getPLAN,setGetPlan] = useState(true);
  console.log("URL : ",url);
 


    // setGetPlan(false); // Met à jour l'état pour éviter une boucle infinie
    useEffect(() => {
      fetch(url.urlHtpp + "upload-delegation", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => response.json())
        .then(data => {
          console.log("DATA RETOUR : ",data);
          setDelegationList(data); // Met à jour l'état avec les données reçues
        })
        .catch(error => {
          console.log(error);
        });
    }, [getPLAN]); // Exécute cet effet uniquement lorsque getPLAN change
  
  
  
  const firstRowStyle = {
    fontWeight: 'bold',
  };
  
  const [expanded, setExpanded] = useState(false);
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
    padding: '5px',
    textAlign: 'center',
    border: '1px solid #ddd',
    backgroundColor: '#f5f5f5',
  };

  const tdStyle = {
    padding: '5px',
    textAlign: 'center',
    border: '1px solid #ddd',
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <button
        style={buttonStyle} // Utiliser le style du bouton correct
        onClick={() => setExpanded(!expanded)}
      >
        <b>{expanded}</b> {expanded ? 'Réduire' : 'Afficher la liste des Personnes'}
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
            {delegationList.map((row, rowIndex) => ( 
              <tr key={rowIndex}>
                  <td  style={tdStyle}> {row.contact_id}</td>
                  <td  style={tdStyle}>{row.nom}</td>
                  <td  style={tdStyle}>{row.prenom}</td>
                  <td  style={tdStyle}>{row.nom_badge}</td>
                  <td  style={tdStyle}>{row.nom_organisation}</td>
                  <td  style={tdStyle}>{row.nom_fonction}</td>
                  <td  style={tdStyle}>{row.nom_discipline ?? 0}</td>
                  <td  style={tdStyle}>{row.genre}</td>
                  <td  style={tdStyle}>{row.numero_chambre}</td>
                  <td  style={tdStyle}>{row.printing_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};




export default DelegationAfficherPerson;
