import React from 'react';
import Calendar from 'react-calendar';

const ProgramCalendar = ({ onDateChange }) => {
  const containerStyle = {
    textAlign: 'center',
    margin: '20px'
  };

  const titleStyle = {
    fontSize: '24px',
    color: '#973116', /* Couleur bleue de Bootstrap */
    marginBottom: '10px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Calendrier du programme</h2>
      <Calendar onChange={onDateChange} />
    </div>
  );
};

export default ProgramCalendar;
