// Hebergement.js
import React from 'react';

const Hebergement = ({ nom, capacite, chambresOccupees, prix, joursOccupes }) => {
  return (
    <div>
      <h3>{nom}</h3>
      <p>Capacité : {capacite}</p>
      <p>Chambres Occupées : {chambresOccupees}</p>
      <p>Prix par Chambre : {prix}</p>
      <p>Jours Occupés : {joursOccupes}</p>
    </div>
  );
};

export default Hebergement;
