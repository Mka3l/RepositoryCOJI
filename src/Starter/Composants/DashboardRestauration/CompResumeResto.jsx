import React, { useEffect, useRef, useState } from 'react';
const CompResumeResto = ({titre,valeur,unite}) =>{

  const cardStyle = {
    width: '25%',
    border: "none",
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 1.1) 0px 1px 0px',
    backgroundColor: '#dadada',
    padding: '20px',
  };

  const cardTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  const cardIconStyle = {
    fontSize: '24px',
    color: '#7d240c',
  };

  const cardTextWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const cardTextIconStyle = {
    fontSize: '18px',
    marginRight: '10px',
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
            <h5 className="card-title" style={cardTitleStyle}>
              {titre}
            </h5>

            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center" style={cardIconStyle}>
                <i className="bi bi-cart"></i>
              </div>
              <div className="ps-3">
                <div style={cardTextWrapperStyle}>
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
            </div>
          </div>
        </div>
    );
}
export default CompResumeResto;