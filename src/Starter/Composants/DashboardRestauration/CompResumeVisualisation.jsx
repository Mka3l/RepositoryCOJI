import React, { useEffect, useRef, useState } from 'react';
const CompResumeVisualisation = ( {titre , valeur, unite}) =>{

  const cardStyle = {
    width: '48%',
    border: "none",
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 1.1) 0px 1px 0px',
    backgroundColor: '#FDE9E0',
    padding: '20px',
  };

  const cardTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
    textAlign:'center'
  };

  const cardIconStyle = {
    fontSize: '24px',
    color: '#F5F5DC',
  };


  const cardTextContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign : 'center',
   
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
            <h5 className="card-title" style={cardTitleStyle}>
              {titre}
            </h5>
              
                  <div className="card-text" style={cardTextContentStyle}>
                    <span className="text-success small pt-1 fw-bold" style={cardTextValueStyle}>
                      {valeur}
                    </span>
                    <span className="card-text" style={{ fontSize: '14px', color: '#555' }}>
                      {unite}
                    </span>
                  </div>
            
          </div>
        </div>
    );
}
export default CompResumeVisualisation;