// OptionRestauration.js
import React from 'react';

const OptionRestauration = ({ type, athletes }) => {
  return (
    <div>
      <h3>Option de Restauration : {type}</h3>
      <ul>
        {athletes.map((athlete, index) => (
          <li key={index}>{athlete}</li>
        ))}
      </ul>
    </div>
  );
};

export default OptionRestauration;
