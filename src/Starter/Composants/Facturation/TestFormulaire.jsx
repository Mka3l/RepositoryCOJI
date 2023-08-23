import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestFormulaire = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    numero: '',
    hotels: '',
    rib: '',
    zones: '',
    sejours: '',
    Capacité total en lits: '',
    personnes: '',
    prixHebergement: '',
    coutHebergement: '',
    plats: '',
    prixPlats: '',
    coutRestauration: '',
    coutProforma: '',
    coutFacture: '',
    numeroFacture: '',
    premiereAcompte: '',
    situationPremiereAcompte: '',
    deuxiemeAcompte: '',
    situationDeuxiemeAcompte: '',
    restesAPayer: ''
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Fait la requête pour récupérer les données depuis le backend
    // Notez que j'utilise ici un faux endpoint pour la démonstration
    axios.get('http://localhost:8080/api/excel-data/all')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simule l'envoi des données au backend
    // Mettre à jour les données avec la nouvelle entrée
    // (vous devrez ajouter la logique pour gérer l'ajout dans l'état de données "data")
    setData([...data, Object.values(formData)]);
    // Réinitialiser le formulaire
    setFormData({
      numero: '',
      hotels: '',
      rib: '',
      zones: '',
      sejours: '',
      Capacité total en lits: '',
      personnes: '',
      prixHebergement: '',
      coutHebergement: '',
      plats: '',
      prixPlats: '',
      coutRestauration: '',
      coutProforma: '',
      coutFacture: '',
      numeroFacture: '',
      premiereAcompte: '',
      situationPremiereAcompte: '',
      deuxiemeAcompte: '',
      situationDeuxiemeAcompte: '',
      restesAPayer: ''
    });
  };

  const columns = [
    "N°",
    "HOTELS ",
    "RIB",
    "ZONES",
    "SEJOUR(S)",
    "LIT(S)",
    "NBRE DE PERSONNES",
    "PRIX UNITAIRE HEBERGEMENT",
    "COÛT HEBERGEMENT",
    "NBRE DE PLATS",
    "PRIX UNITAIRE PLATS",
    "COÛT RESTAURATION",
    "COÛT PROFORMA",
    "COÛT FACTURE",
    "N°FACTURE",
    "1 ère ACOMPTES (35%)",
    "SITUATION  1ère ACOMPTES ",
    "2ème ACOMPTES (35%)",
    "SITUATION  2ème ACOMPTES",
    "RESTES A PAYER \r\n(30%)"
  ];

  return (
    <div>
      <h2>Etat des Paiements des Sites D'hébergement</h2>
      <a href="#" onClick={() => setShowForm(!showForm)}>
        (Ajouter état de paiement)
      </a>
      {showForm && (
        <form onSubmit={handleSubmit}>
          {/* Ajoutez les champs du formulaire ici */}
          {/* Utilisez les valeurs de formData pour les champs */}
          <button type="submit">Ajouter</button>
        </form>
      )}
      <style>
        {`
          .table-cell-auto {
            width: auto;
            white-space: nowrap;
          }
        `}
      </style>
      <table className="table table-striped table-bordered">
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
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="table-cell-auto">
                  {typeof cell === 'number'
                    ? cell.toLocaleString() // Formate les nombres avec des séparateurs de milliers
                    : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestFormulaire;
