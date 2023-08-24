import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../HebergementStyles/HebergementFormulaire.css';

const HebergementFormulaire = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    NomHebergement: '',
    RibHebergement: '',
    Zones: '',
    DatesEntree: '',
    DateSortie: '',
    PrixJournalier: '',
    Delegation: '',
    PrixHebergement: '',
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // axios.get('http://localhost:8080/excel-data')
    //   .then(response => {
    //     setData(response.data);
        
    //   })
    //   .catch(error => {
    //     console.error('Erreur lors de la récupération des données :', error);
    //   });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, formData]);
    setFormData({
      NomHebergement: '',
      RibHebergement: '',
      Zones: '',
      DatesEntree: '',
      DateSortie: '',
      PrixJournalier: '',
      Delegation: '',
      PrixHebergement: '',
    });
  };

  const columns = [
    "nom_hebergement",
    "rib_hebergement",
    "zone",
    "date_entree",
    "date_sortie",
    "prix_journalier",
    "delegation",
    "prix_hebergement",
  ];

  return (
    <div className="container">
      <h2>Délégation par Sites D'hébergement</h2>
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
      )}
      <table className="table">
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
              <td>{row.nom_hebergement}</td>
              <td>{row.rib_hebergement}</td>
              <td>{row.zone}</td>
              <td>{row.date_entree}</td>
              <td>{row.date_sortie}</td>
              <td>{row.prix_journalier}</td>
              <td>{row.delegation}</td>
              <td>{row.prix_hebergement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HebergementFormulaire;
