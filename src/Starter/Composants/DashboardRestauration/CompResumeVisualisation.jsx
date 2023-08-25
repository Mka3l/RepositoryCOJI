import React, { useEffect, useRef, useState } from 'react';
const CompResumeVisualisation = ({ titre, valeur, unite }) => {

  const cardStyle = {
    width: '48%',
    border: "none",
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 1.1) 0px 1px 0px',
    backgroundColor: '#FFCB37',
    padding: '20px',
  };

  const cardTextContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    

  };

  const cardTextValueStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#7d240c',
    textAlign: 'center',
  };


  return (
    <div className="col-xxl-4 col-md-6" style={{ ...cardStyle }}>
      <div className="card-body">
        <h5 className="card-title" style={{
          top: '150px',

          fontFamily: 'Arial, sans-serif',
          fontSize: '28px',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          color: '#333'
        }}>
          {titre}
        </h5>
        <div className="card-text" style={cardTextContentStyle}>
          <span className="text-success small pt-1 fw-bold" style={cardTextValueStyle}>
            {valeur}
          </span>
          <span className="card-text text-center" style={{ fontSize: '25px', color: '#555' }}>
            {unite}
          </span>
        </div>
      </div>
    </div>
  );
}
export default CompResumeVisualisation;