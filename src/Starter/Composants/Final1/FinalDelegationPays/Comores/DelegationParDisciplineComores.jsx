import React, { useState, useEffect } from 'react';
import url from '../../../../urlHtpp';

const DelegationParDisciplineComores = () => {
  const columns = [
    "Disciplines (19)",
    "Athlètes Hommes",
    "Athlètes Femmes",
    " Total Athlètes",
    "Encadreurs H/F",
    "Juges Arbitres",
    "Officiels Techniques",
    "Président de Fédération",
    "Responsable Admtif fédération",
    "Total"
  ]
  // const columns = [
  //   "Disciplines (19)",
  //   "Athlètes Hommes",
  //   "Athlètes Femmes",
  //   " Total Athlètes",
  //   "Encadreurs H/F",
  //   "Juges Arbitres",
  //   "Président de Fédération",
  //   "Responsable Admtif fédération",
  //   "Total"
  // ]
  // const rows = [
  //   [
  //     "Total",
  //     152,
  //     49,
  //     201,
  //     41,
  //     29,
  //     19,
  //     0,
  //     290
  //   ],
  //   [
  //     "Athlétisme",
  //   13,
  //   3,
  //   16,
  //   3,
  //   2,
  //   2,
  //   null,
  //   23
  //   ],
  //   [
  //     "Badminton (h/f)",
  //     2,
  //     null,
  //     2,
  //     1,
  //     1,
  //     1,
  //     null,
  //     5
  //   ],
  //   [
  //   "Basket",
  //     16,
  //     16,
  //     32,
  //     6,
  //     5,
  //     1,
  //     0,
  //     44
  //   ],
  //   [
  //     "Boxe (h)",
  //     8,
  //     0,
  //     8,
  //     3,
  //     1,
  //     1,
  //     null,
  //     13
  //   ],
  //   [
  //     "Cyclisme (h)",
  //     5,
  //     0,
  //     5,
  //     3,
  //     1,
  //     1,
  //     null,
  //     10
  //   ],
  //   [
  //     "Football (h)",
  //     22,
  //     null,
  //     22,
  //     3,
  //     2,
  //     1,
  //     null,
  //     28
  //   ],
  //   [
  //     "Haltérophilie (h/f)",
  //     6,
  //     0,
  //     6,
  //     1,
  //     1,
  //     1,
  //     null,
  //     9
  //   ],
  //   [
  //     "Handball",
  //     14,
  //     14,
  //     28,
  //     4,
  //     4,
  //     1,
  //     null,
  //     37
  //   ],
  //   [
  //     "Judo (h/f)",
  //     7,
  //     1,
  //     8,
  //     3,
  //     1,
  //     1,
  //     null,
  //     13
  //   ],
  //   [
  //     "Kick boxing",
  //     null,
  //     null,
  //     0,
  //     null,
  //     null,
  //     null,
  //     null,
  //     0
  //   ],
  //   [
  //     "Karaté",
  //     7,
  //     0,
  //     7,
  //     1,
  //     1,
  //     1,
  //     null,
  //     10
  //   ],
  //   [
  //     "Lutte",
  //     4,
  //     2,
  //     6,
  //     1,
  //     1,
  //     1,
  //     null,
  //     9
  //   ],
  //   [
  //     "Natation",
  //     6,
  //     3,
  //     9,
  //     3,
  //     2,
  //     1,
  //     0,
  //     15
  //   ],
  //   [
  //     "Pétanque",
  //     8,
  //     4,
  //     12,
  //     2,
  //     2,
  //     1,
  //     null,
  //     17
  //   ],
  //   [
  //     "Rugby à 7 (h)",
  //     null,
  //     null,
  //     0,
  //     null,
  //     null,
  //     null,
  //     null,
  //     0
  //   ],
  //   [
  //     "Taekwondo",
  //     4,
  //     null,
  //     4,
  //     1,
  //     1,
  //     1,
  //     null,
  //     7
  //   ],
  //   [
  //     "Tennis",
  //     6,
  //     0,
  //     6,
  //     1,
  //     1,
  //     1,
  //     null,
  //     9
  //   ],
  //   [
  //     "Tennis de Table (h/f)",
  //     4,
  //     0,
  //     4,
  //     1,
  //     1,
  //     1,
  //     null,
  //     7
  //   ],
  //   [
  //     "Volley-ball",
  //     14,
  //     0,
  //     14,
  //     2,
  //     2,
  //     1,
  //     null,
  //     19
  //   ],
  // ];
  const [data, setDataVR] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  // const rowsToShow = expanded ? dataVR : dataVR.slice(0, 1);

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
    textAlign: 'left',
    border: '1px solid #ddd',
    backgroundColor: '#f5f5f5',
  };

  const tdStyle = {
    padding: '10px',
    textAlign: 'left',
    border: '1px solid #ddd',
  };

  const fetchData = () => {
    fetch(url.urlHtpp + "repartition-discipline-delegation/Comores", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Vérifiez la structure des données ici
        setDataVR(data.data); // Convertir l'objet en tableau et mettre à jour le state
        // setLoading(false); // Mettre à jour l'état de chargement
        
      })
      .catch(error => {
        console.log(error);
        setLoading(false); // Mettre à jour l'état de chargement même en cas d'erreur
      });
  };

  useEffect(() => {
    fetchData();
  }, []);




  const finalResult = {};

  // Regrouper les pays uniques
  const uniquePays = Array.from(new Set(data.map(item => item.nom_pays)));

  // Initialiser l'objet finalResult avec des objets vides pour chaque pays
  uniquePays.forEach(pays => {
    finalResult[pays] = {};
  });

  // Regrouper les disciplines uniques pour chaque pays
  uniquePays.forEach(pays => {
    const uniqueDisciplines = Array.from(new Set(data.filter(element => element.nom_pays === pays).map(element => element.nom_discipline)));
    uniqueDisciplines.forEach(discipline => {
      finalResult[pays][discipline] = [];
    });
  });

  // Ajouter les informations pour chaque élément de données
  data.forEach(item => {
    finalResult[item.nom_pays][item.nom_discipline].push({
      nbr_delegation: item.nbr_delegation,
      fonction: item.fonction,
    });
  });




  return (
    <div style={{ marginTop: '20px' }}>
      <button
        style={buttonStyle}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? '-' : '+'} {expanded ? 'Réduire' : 'Afficher plus'}
      </button>
      {expanded && (
       <tbody>
       {Object.entries(finalResult).map(([pays, disciplines]) => (
           <tr key={pays}>
             <h6>{pays}</h6>
             <tr>
              {columns.map((column, index) => (
                <th key={index} style={thStyle}>
                  {column}
                  
                </th>
                
                
              ))}
            </tr>
             
                {Object.entries(disciplines).map(([discipline, items]) => (
                   <tr key={discipline}>
                    
                    <td>{discipline}</td>
                    <td>{items.map(el => el.fonction + ' ' )}</td>
                    <td>{items.map(el => el.nbr_delegation + ' ' )}</td>
                      {/*items.map(el => el.fonction + ' ' + el.nbr_delegation + ' / ')*/}
                   </tr>
               ))} 
             
           </tr>
       ))}
     </tbody>
      )}
    </div>
  );
};
export default DelegationParDisciplineComores;
