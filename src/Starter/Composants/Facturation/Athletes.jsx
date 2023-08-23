// Athlete.js
import React from 'react';


const Athlete = ({ nom, discipline, hebergement, transport, optionRestauration }) => {
  return (
    <div>
      <h3>{nom}</h3>
      <p>Discipline : {discipline}</p>
      <p>Hébergement : {hebergement}</p>
      <p>Transport : {transport}</p>
      <p>Option de Restauration : {optionRestauration}</p>
    </div>
  );
};

export default Athlete;