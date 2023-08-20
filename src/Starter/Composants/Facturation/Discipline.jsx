// Discipline.js
import React from 'react';
import Athlete from './Athlete';

const Discipline = ({ nom, athletes }) => {
  return (
    <div>
      <h2>{nom}</h2>
      {athletes.map((athlete, index) => (
        <Athlete key={index} {...athlete} />
      ))}
    </div>
  );
};

export default Discipline;
