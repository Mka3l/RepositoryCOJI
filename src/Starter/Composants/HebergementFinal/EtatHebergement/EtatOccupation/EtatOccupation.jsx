import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../../HebergementStyles/HebergementFormulaire.css'
import '../../HebergementStyles/TableauStyles.css'
import configUrl from '../../../../ConfigUrl/config_Url';


const EtatOccupation = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    site_hebergement: '',
    capacite_totale: '',
    Lits_occupe: '',
    Lits_restant: '',
  });
  const [showForm, setShowForm] = useState(false);

  // useEffect(() => {
  //   axios.get('http://localhost:8080/hebergement-data')
  //     .then(response => {
  //       console.log('API response:', response.data); 
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Erreur lors de la récupération des données :', error);
  //     });
  // }, []);

 
  const [expanded, setExpanded] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, formData]);
    setFormData({
      site_hebergement: '',
    capacite_totale: '',
    Lits_occupe: '',
    Lits_restant: '',
    });
  };

   const columns = [
    "SITE D'HEBERGEMENT",
    "CAPACITE TOTALE",
    "LITS OCCUPES",
    "LITS RESTANTS",
    "Taux d'occupation"
  ];

  const calculateTauxOccupation = (row) => {
    const lits_occupes = parseFloat(row.Lits_occupe);
    const lits_restants = parseFloat(row.Lits_restant);
    return (lits_occupes / (lits_occupes + lits_restants)) * 100;
  };

  const getEtatOccupation =()=>{
    setExpanded(!expanded)
    fetch(configUrl.url+"")
  }

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>

      <div>
        <h2>Etat d'occupation par Sites D'hébergement</h2>
      <a className="add-link" onClick={() => setShowForm(!showForm)}>
        (Ajouter de Hébergement par Délégation)
      </a>
      {showForm && (
        <form className="form" onSubmit={handleSubmit}>
          {/* Champs du formulaire */}
          <label>
            Nom du site d'Hébergement:
            <input
              type="text"
              value={formData.NomHebergement}
              onChange={(e) => setFormData({ ...formData, NomHebergement: e.target.value })}
            />
          </label>
          <br />
          <label>
            Capacité totale:
            <input
              type="text"
              value={formData.RibHebergement}
              onChange={(e) => setFormData({ ...formData, RibHebergement: e.target.value })}
            />
          </label>
          <br />
          <label>
            Lits Occupées:
            <input
              type="text"
              value={formData.Zones}
              onChange={(e) => setFormData({ ...formData, Zones: e.target.value })}
            />
          </label>
          <br />
          <br />
          <label>
            Lits restant:
            <input
              type="text"
              value={formData.PrixJournalier}
              onChange={(e) => setFormData({ ...formData, PrixJournalier: e.target.value })}
            />
          </label>
          <button type="submit">Ajouter</button>
        </form>
      )}</div>

      <button
        className='buttonStyle'
        onClick={getEtatOccupation }
      >
        {expanded ? '-' : '+'} {expanded ? 'Réduire' : 'Afficher plus'}
      </button>
      {expanded && data && (
        <table className='tableStyle'>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className='tdStyle'>{row.site_hebergement}</td>
                <td className='tdStyle'>{row.capacite_totale}</td>
                <td className='tdStyle'>{row.Lits_occupe}</td>
                <td className='tdStyle'>{row.Lits_restant}</td>
                <td className='tdStyle'>{calculateTauxOccupation(row).toFixed(0)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EtatOccupation;
