import React, { useState , useEffect} from 'react';
import { Facturation } from '../../../../config/service';
import axios from 'axios';

const EtatPaiementGeneral = () => {
  const [mergedData, setMergedData] = useState([]);
    const [facto, setFacto] = useState({
        n:"",
        hotels: "",
        zone:"", 
        nbrSejour: "",
        nbrLit: "", 
        nbrPersonne: "", 
        prixUnitaire:"",
        montantHebergement:"",
        nbrPlace:"", 
        prixUnitaireByPlace:"",
        restaurationAmount:"", 
        proformaAmount:"", 
        factureAmount:"", 
        defferenceFactureProforma:"",
        factureNumber:"",
    })
  const columns = [
    "N°",
    "Hotels",
    "Zones",
    "Sejour(s)",
    "Lit(s)",
    "Nombre total de personnes",
    "Prix unitaire hebergement(Ariary par nuitée)",
    "Montant hébergement(Ariary)",
    "Nombre de plats",
    "Prix unitaire par plats (Ariary par plat)",
    "Montant restauration (Ariary)",
    "Montant Pro-forma (Ariary)",
    "Montant Facture (Ariary)",
    "Ecart Facture et Pro-forma",
    "N°Facture"
  ];

  useEffect(() => {
    axios.get('/data.json')  // Adjust the path as needed
      .then(response => {
        setFacto(response.data);
      })
      .catch(error => {
        console.error('Erreur de données:', error);
      });
  }, []);
  const rows = [
    [
      facto.n, 
      facto.hotels,
      facto.zone,
      facto.nbrSejour,
      facto.nbrLit,
      facto.nbrPersonne,
      facto.prixUnitaire, 
      facto.montantHebergement,
      facto.nbrPlace, 
      facto.prixUnitaireByPlace, 
      facto.restaurationAmount,
      facto.proformaAmount, 
      facto.factureAmount, 
      facto.defferenceFactureProforma,
      facto.factureNumber
    ]
  ]
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
        {showAllColumns ? 'Masquer colonnes 6-14' : 'Afficher colonnes 6-14'}
      </button>
      <table style={tableStyle}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              // Modifie les conditions pour afficher les colonnes en fonction des états des boutons
              ((showAllColumns && index >= 6 && index <= 14) ||
                (!showAllColumns && index <= 5) ||
                (showAllColumns && index === 1)) && (
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
                ((showAllColumns && cellIndex >= 6 && cellIndex <= 14) ||
                  (!showAllColumns && cellIndex <= 5) ||
                  (showAllColumns && cellIndex === 1)) && (
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
export default EtatPaiementGeneral;
