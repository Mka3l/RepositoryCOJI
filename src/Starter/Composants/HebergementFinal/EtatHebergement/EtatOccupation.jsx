import React, { useRef, useState } from 'react';
import AjoutHebergement from '../AjoutHebergement';

const EtatOccupation = ({ data }) => {
  /////alert(JSON.stringify(data))

  var urlHtpp = "http://127.0.0.1:9090/";
  const columns = [
    "SITE D'HEBERGEMENT",
    "CAPACITE \r\nTOTALE (EN LITS)",
    "LITS \r\nOCCUPES",
    "LITS \r\nRESTANTS",
    "TAUX D'OCCUPATION (%)"
  ];
  const valuesOnly = data.map(obj => Object.values(obj));
  const rows = data
  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? rows : [];

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



  const id = useRef();
  const nom = useRef();
  const capacite_total = useRef();
  const lit_occupe = useRef();
  const lit_restant = useRef();


  const Modifier = () => {
    const heb = {
      "id": id.current.value,
      "nom": nom.current.value,
      "capacite_totale": capacite_total.current.value,
      "chambre_restante": lit_restant.current.value,
      "chambre_occupees": lit_occupe.current.value
    }
    fetch(urlHtpp+"hebergements", {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(heb)
    })
      .then(response => response.json())
      .then(data => { console.log(data) })
      .catch(error => { console.log(error) });
  }

  const tdStyle = {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
  };
  return (
    <div style={{ marginTop: '20px' }}>
      <button
        style={buttonStyle}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? '-' : '+'} {expanded ? 'Réduire' : 'Afficher plus de détails'}
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
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td style={tdStyle}>{row.nom}</td>
                <td style={tdStyle}>{row.capacite_totale}</td>
                <td style={tdStyle}>{row.chambre_occupees}</td>
                <td style={tdStyle}>{row.chambre_restante}</td>
                <td style={tdStyle}>{row.taux_occupation}</td>
                <td>
                  <AjoutHebergement Action={"Modifier"} Titre={"Modifier Etat Occupation"}>
                    <input type='hidden' ref={id} value={row.id} />
                    <p>Nom</p>
                    <p><input type='text' value={row.nom} ref={nom} className='form-control' /></p>
                    <p>Capacité total </p>
                    <p><input type='number' className='form-control' ref={capacite_total} value={row.capacite_totale} /></p>
                    <p>Lits Occupes </p>
                    <p><input type='number' className='form-control' ref={lit_occupe} value={row.chambre_occupees} /></p>
                    <p>Lits Restants</p>
                    <p><input type='number' className='form-control' ref={lit_restant} value={row.chambre_restante} /></p>
                    <button className='btn btn-primary' onClick={Modifier}> Modifier</button>
                  </AjoutHebergement>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      )}
    </div>
  );
};
export default EtatOccupation;
