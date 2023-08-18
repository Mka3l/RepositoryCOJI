import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InscriptionDelegation = () => {
  const [nom, setNom] = useState('');
  const [nombre, setNombre] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/delegations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: nom,
          nombre: parseInt(nombre),
        }),
      });
      const data = await response.json();
      console.log('Délégation enregistrée avec succès:', data);

      // Réinitialiser les champs du formulaire après la soumission réussie
      setNom('');
      setNombre('');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de la délégation:', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body ">
          <h2 className="card-title">Formulaire d'inscription de délégation</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nom de la délégation:</label>
              <input
                type="text"
                className="form-control"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Nombre de participants:</label>
              <input
                type="number"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Enregistrer</button>

            {/* Utilisez la composante Link pour rediriger vers la page de base */}
            <Link to="/page-de-base">Page de base</Link> {/* Remplacez '/page-de-base' par le chemin de votre autre composant React */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default InscriptionDelegation;
