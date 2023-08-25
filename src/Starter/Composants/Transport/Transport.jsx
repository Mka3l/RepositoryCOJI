import React from 'react';
import './TransportButton.css'

const TransportMap = () => {
  return (
    <div style={{ display: 'flex', marginLeft: '40%' }}>
      <div style={{ width: '100%', height: '100vh' }}>
        {/* <iframe
        title="Map Transport"
        width="100%"
        height="100%"
        loading='eager'
        src="https://gsh4.net/id29/index.php?au=E2D499AD95BAFA18AD48443E646FBC26&m=true"
      ></iframe> */}
        <button
          className="custom-BouttonDeOUf"
          onClick={() => window.open("https://gsh4.net/id29/index.php?au=E2D499AD95BAFA18AD48443E646FBC26&m=true")}
          target="_blank"
        >

          <div className="round-button-content">
            <p>Cliquer pour</p>
            <p>suivre les voitures</p>
            <p>en temps réel</p>
          </div>
        </button>
      </div>
    </div>
  );
};


export default TransportMap;

