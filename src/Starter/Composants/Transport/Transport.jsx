import React from 'react';

const TransportMap = () => {
  return (

    <div style={{ width: '100%', height: '100vh' }}>
      {/* <iframe
        title="Map Transport"
        width="100%"
        height="100%"
        loading='eager'
        src="https://gsh4.net/id29/index.php?au=E2D499AD95BAFA18AD48443E646FBC26&m=true"
      ></iframe> */}
      <button className="btn btn-primary" onClick={() => window.open("https://gsh4.net/id29/index.php?au=E2D499AD95BAFA18AD48443E646FBC26&m=true")} target="_blank">
  VOIR ITINERAIRES
</button>
    </div>
  );
};


export default TransportMap;

