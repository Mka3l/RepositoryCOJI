import React, { useEffect, useRef, useState } from 'react';
import AjoutHebergement from '../AjoutHebergement';

const RecapEtatOccupation = ({data}) => {


  var urlHtpp = "http://127.0.0.1:9090/";
  const [hebergement, setHebergement] = useState({});
  const [etatOccup,setEtatOccup] = useState([])

  // ////:Get Recap 
  // useEffect(() => {
  //   fetch(urlHtpp + 'hebergement-taux-occupation', {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   }).then(response => response.json())
  //     .then(data => { 
  //       console.log(data.hebergementDetail[0])
  //       setHebergement(data.hebergementDetail[0]) 
  //       setEtatOccup(data.hebergementOccupe)
  //       console.log(data.hebergementOccupe)
  //     })
  //     .catch(error => { console.log(error) });
  // }, []);


  const columns = [
      "SITE D'HEBERGEMENT",
      "CAPACITE \r\nTOTALE (EN LITS)",
      "LITS \r\nOCCUPES",
      "LITS \r\nRESTANTS",
      "TAUX D'OCCUPATION (%)"
    ];
  const rows = [
    [
      data.nombretotalsite,
      data.capacite_totale,
      data.chambre_occupees,
      data.chambre_restante,
      data.taux_occupation
    ]
  ];
  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? rows : rows.slice(0, 1);
  const firstRowStyle = {
    fontWeight: 'bold', // Utiliser une valeur plus légère que 'bold'
    color: '#332', // Couleur de police
  };


  ///:====Input ==================
  const nom = useRef();
  const capaciteTotal = useRef();
  const chambreRestante = useRef();
  const chambreOccupe = useRef();

  //==========================
  const AddHebergement = () => {
    const hebergement = {
      "nom": nom.current.value,
      "capacite_totale": capaciteTotal.current.value,
      "chambre_restante": chambreRestante.current.value,
      "chambre_occupees": chambreOccupe.current.value
    }
    console.log(JSON.stringify(hebergement));
    fetch(urlHtpp + "hebergements", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(hebergement)
    })
      .then(response => response.json())
      .then(data => { console.log(data) })
      .catch(error => { console.log(error) });
  }
  
  return (
    <div>
      <style>
        {`
          .table-cell-auto {
            width: auto;
            white-space: nowrap;
          }
          .expand-button {
            cursor: pointer;
          }
        `}
      </style>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className='text-center'>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowsToShow.map((row, rowIndex) => (
            <tr key={rowIndex} style={rowIndex === 0 ? firstRowStyle : {}}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={`table-cell-auto ${typeof cell === 'number' ? 'text-center' : ''}`}>
                {typeof cell === 'number'
                    ? cell.toLocaleString() // Formate les nombres avec des séparateurs de milliers
                    : cell}
                </td>
              ))}
            </tr>
          ))}
          {/* {!expanded ? (
            <tr>
              <td colSpan={columns.length} className="expand-button" onClick={() => setExpanded(true)}>
                <b>+</b> Afficher plus
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan={columns.length} className="expand-button" onClick={() => setExpanded(false)}>
                <b>-</b> Réduire
              </td>
            </tr>
          )} */}
        </tbody>
      </table>
      <AjoutHebergement Action={"Ajout Hebergement"} Titre={"Ajout Hebergement"}>
      <p>Nom</p>
      <p> <input type='text' ref={nom} className='form-control' /></p>
      <p>Capacite Total</p>
      <p> <input type='number' ref={capaciteTotal} className='form-control' /></p>
      <p>Chambre Restante</p>
      <p> <input type='number' ref={chambreRestante} className='form-control' /></p>
      <p>Chambre Occupé</p>
      <p> <input type='number' ref={chambreOccupe} className='form-control' /></p>
      <p><button className='btn btn-success' onClick={AddHebergement}>Ajouter</button></p>
    </AjoutHebergement>
    </div>
  );
};

export default RecapEtatOccupation;
