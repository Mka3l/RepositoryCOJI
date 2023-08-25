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
  const [currentPage,setCurrentPage] = useState(1)
  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = delegationList.slice(startIndex,endIndex);
  const totalPages = Math.ceil(delegationList.length/itemsPerPage)

    // setGetPlan(false); // Met à jour l'état pour éviter une boucle infinie
    useEffect(() => {
      fetch(url.urlHtpp + "repartition-discipline-delegation/list", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => response.json())
        .then(data => {
          console.log("DATA RETOUR : ",data.data);
          setDelegationList(data.data); // Met à jour l'état avec les données reçues
        })
        .catch(error => {
          console.log(error);
        });
    }, [getPLAN]); // Exécute cet effet uniquement lorsque getPLAN change
  
  const [nom,setNom] = useState('');
  const [prenom,setPrenom] = useState('');
  const [pays,setPays] = useState('');
  const [discipline,setDiscipline] = useState('')
  const [fonction,setFonction]=useState('')

  const recherche = ()=>{
    fetch(url.urlHtpp + "repartition-discipline-delegation/list?nom="+nom+"&&prenom="+prenom+"&&pays="+pays+"&&discipline="+discipline+"&&fonction="+fonction, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json())
        .then(data => {
          console.log("DATA RETOUR : ",data.data);
          setDelegationList(data.data); // Met à jour l'état avec les données reçues
        })
        .catch(error => {
          console.log(error);
        });
  }
  const firstRowStyle = {
    fontWeight: 'bold',
  };
  
  const [expanded, setExpanded] = useState(true);
  const styles = {
    formContainer: {
      display: 'flex',
      flexDirection: 'row',
      margin: '0 auto',
    },
    formRow: {
      display: 'inline-flex',  // Changement ici pour affichage en ligne
      flexDirection: 'column',
      gap: '5px',
      marginRight: '10px', // Ajout de marge entre les champs
    },
    label: {
      fontWeight: 'bold',
    },
    input: {
      padding: '5px',
      border: '1px solid #ccc',
      borderRadius: '3px',
    },
    button: {
      backgroundColor: expanded ? '#7d240c' : '#973116',
      color: 'white',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
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
          <div>
            <div>
              <div style={styles.formContainer}>
                <div style={styles.formRow}>
                  <label htmlFor="nom" style={styles.label}>Nom</label>
                  <input
                      type="text"
                      id="nom"
                      value={nom}
                      placeholder="Nom"
                      onChange={e => setNom(e.target.value)}
                      style={styles.input}
                  />
                </div>
                <div style={styles.formRow}>
                  <label htmlFor="prenom" style={styles.label}>Prénom</label>
                  <input
                      type="text"
                      id="prenom"
                      value={prenom}
                      placeholder="Prénom"
                      onChange={e => setPrenom(e.target.value)}
                      style={styles.input}
                  />
                </div>
                <div style={styles.formRow}>
                  <label htmlFor="pays" style={styles.label}>Pays</label>
                  <input
                      type="text"
                      id="pays"
                      value={pays}
                      placeholder="Pays"
                      onChange={e => setPays(e.target.value)}
                      style={styles.input}
                  />
                </div>
                <div style={styles.formRow}>
                  <label htmlFor="discipline" style={styles.label}>Discipline</label>
                  <input
                      type="text"
                      id="discipline"
                      value={discipline}
                      placeholder="Discipline"
                      onChange={e => setDiscipline(e.target.value)}
                      style={styles.input}
                  />
                </div>
                <div style={styles.formRow}>
                  <label htmlFor="fonction" style={styles.label}>Fonction</label>
                  <input
                      type="text"
                      id="fonction"
                      value={fonction}
                      placeholder="Fonction"
                      onChange={e => setFonction(e.target.value)}
                      style={styles.input}
                  />
                </div>
                <button onClick={recherche} style={styles.button}>Recherche</button>
              </div>
            </div>
            <div>
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
                {itemsToDisplay.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td  style={tdStyle}> {row.contact_id}</td>
                      <td  style={tdStyle}>{row.nom}</td>
                      <td  style={tdStyle}>{row.prenom}</td>
                      <td  style={tdStyle}>{row.nom_badge}</td>
                      <td  style={tdStyle}>{row.nom_pays}</td>
                      <td  style={tdStyle}>{row.nom_fonction}</td>
                      <td  style={tdStyle}>{row.nom_discipline ?? 0}</td>
                      <td  style={tdStyle}>{row.genre}</td>
                      <td  style={tdStyle}>{row.numero_chambre}</td>
                      <td  style={tdStyle}>{row.printing_status}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
      )}

      {
        expanded && (
              <div style={{marginTop:'10px',display:'flex',justifyContent:'center'}}>
                <button
                  onClick={()=>setCurrentPage(currentPage-1)}
                  disabled={currentPage === 1}
                  style={buttonStyle}>
                  Precedent
                </button>
                <span style={{margin:'0 1px'}}>
                  Page {currentPage} sur {totalPages}
                </span>
                <button
                  onClick={()=>setCurrentPage(currentPage+1)}
                  disabled={currentPage === totalPages}
                  style={buttonStyle}>
                  Suivant
                </button>
              </div>
          )
      }
    </div>
  );
};




export default DelegationAfficherPerson;
