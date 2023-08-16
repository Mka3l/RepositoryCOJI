import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DelegationAccueil = ({ onPageChange }) => {
  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Permet aux éléments de passer à la ligne
    marginTop: '20px',
    padding: '50px',
    justifyContent: 'center', // Centre les éléments horizontalement
  };
  const handleCardClick = (pageName) => {
    onPageChange(pageName);
  };

  const cardStyle = {
    width: '20%',
    border: "none",
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Nouveau style de box shadow
    backgroundColor: '#dadada',
    padding: '20px',
    marginRight: '50px',
    marginBottom: '20px',
    textAlign: 'center', // Centre le contenu du texte horizontalement
  };

  const cardTitleStyle = {
    fontSize: '25px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const cardTextContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centre les contenus horizontalement
    marginBottom: '15px',
  };

  const cardTextValueStyle = {
    fontSize: '35px',
    fontWeight: 'bold',
    color: '#7d240c',
  };

  return (
    <div style={cardContainerStyle}>

      <div style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            Madagascar
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
              1459
            </span>
            <span className="card-text" style={{ fontSize: '20px', color: '#555' }}>
              Total Délégation Madagascar
            </span>
          </div>
        </div>
      </div>


      <div style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            Comores
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
              290
            </span>
            <span className="card-text" style={{ fontSize: '20px', color: '#555' }}>
              Total délégation Comores
            </span>
          </div>
        </div>
      </div>



      <div style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            Mayotte
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
              361
            </span>
            <span className="card-text" style={{ fontSize: '20px', color: '#555' }}>
              Total délégation Mayotte
            </span>
          </div>
        </div>
      </div>



      <div style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            Maurice
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
              649
            </span>
            <span className="card-text" style={{ fontSize: '20px', color: '#555' }}>
              Total délégation Maurice
            </span>
          </div>
        </div>
      </div>


      <div style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            Seychelles
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
              511
            </span>
            <span className="card-text" style={{ fontSize: '20px', color: '#555' }}>
              Total délégation Seychelles
            </span>
          </div>
        </div>
      </div>

      <div style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            Maldives
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
              242
            </span>
            <span className="card-text" style={{ fontSize: '20px', color: '#555' }}>
              Total délégation Maldives
            </span>
          </div>
        </div>
      </div>

      <div style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            La Réunion
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success small pt-1 fw-bold" style={cardTextValueStyle}>
              652
            </span>
            <span className="card-text" style={{ fontSize: '20px', color: '#555' }}>
              Total délégation La Réunion
            </span>
          </div>
        </div>
      </div>
      
    </div>

  );
};

export default DelegationAccueil;
