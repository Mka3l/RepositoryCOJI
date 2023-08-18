// Transport.js
import React from 'react';

const Transport = ({ immatriculation, prixParJour, places, joursUtilises }) => {
  return (
    <div>
      <h3>Transport {immatriculation}</h3>
      <p>Prix par Jour : {prixParJour}</p>
      <p>Places : {places}</p>
      <p>Jours Utilisés : {joursUtilises}</p>
    </div>
  );
};

export default Transport;
