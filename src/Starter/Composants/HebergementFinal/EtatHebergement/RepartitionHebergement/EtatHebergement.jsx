import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EtatHebergement = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    site_hebergement: '',
    capacite_totale: '',
    Lits_occupe: '',
    Lits_restant: '',
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/hebergement-data')
      .then(response => {
        console.log('API response:', response.data); 
        setData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);

 
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

  const tdStyle = {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'center',
  };

  const calculateTauxOccupation = (row) => {
    const lits_occupes = parseFloat(row.Lits_occupe);
    const lits_restants = parseFloat(row.Lits_restant);
    return (lits_occupes / (lits_occupes + lits_restants)) * 100;
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>

      <div><h2>Délégation par Sites D'hébergement</h2>
      <a className="add-link" onClick={() => setShowForm(!showForm)}>
        (Ajouter de Hébergement par Délégation)
      </a>
      {showForm && (
        <form className="form" onSubmit={handleSubmit}>
          {/* Champs du formulaire */}
          <label>
            Nom de l'Hébergement:
            <input
              type="text"
              value={formData.NomHebergement}
              onChange={(e) => setFormData({ ...formData, NomHebergement: e.target.value })}
            />
          </label>
          <br />
          <label>
            Rib de l'Hébergement:
            <input
              type="text"
              value={formData.RibHebergement}
              onChange={(e) => setFormData({ ...formData, RibHebergement: e.target.value })}
            />
          </label>
          <br />
          <label>
            Zones:
            <input
              type="text"
              value={formData.Zones}
              onChange={(e) => setFormData({ ...formData, Zones: e.target.value })}
            />
          </label>
          <br />
          <label>
            Date d'Entrée:
            <input
              type="date"
              value={formData.DatesEntree}
              onChange={(e) => setFormData({ ...formData, DatesEntree: e.target.value })}
            />
          </label>
          <br />
          <label>
            Date de Sortie:
            <input
              type="date"
              value={formData.DateSortie}
              onChange={(e) => setFormData({ ...formData, DateSortie: e.target.value })}
            />
          </label>
          <br />
          <label>
            Prix Journalier:
            <input
              type="text"
              value={formData.PrixJournalier}
              onChange={(e) => setFormData({ ...formData, PrixJournalier: e.target.value })}
            />
          </label>
          <br />
          <label>
            Délégation:
            <select
              value={formData.Delegation}
              onChange={(e) => setFormData({ ...formData, Delegation: e.target.value })}
            >
              <option value="">Sélectionnez une délégation</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Comores">Comores</option>
              <option value="Mayottes">Mayottes</option>
              <option value="La Réunion">La Réunion</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Maldives">Maldives</option>
              <option value="Maurice">Maurice</option>
            </select>
          </label>
          <br />
          <label>
            Prix de l'Hébergement:
            <input
              type="text"
              value={formData.PrixHebergement}
              onChange={(e) => setFormData({ ...formData, PrixHebergement: e.target.value })}
            />
          </label>
          <br />
          <button type="submit">Ajouter</button>
        </form>
      )}</div>

      <button
        style={buttonStyle}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? '-' : '+'} {expanded ? 'Réduire' : 'Afficher plus'}
      </button>
      {expanded && data && (
        <table style={tableStyle}>
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
                <td style={tdStyle}>{row.site_hebergement}</td>
                <td style={tdStyle}>{row.capacite_totale}</td>
                <td style={tdStyle}>{row.Lits_occupe}</td>
                <td style={tdStyle}>{row.Lits_restant}</td>
                <td style={tdStyle}>{calculateTauxOccupation(row).toFixed(0)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EtatHebergement;
