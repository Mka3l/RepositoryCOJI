import React, {useState, useEffect} from 'react';
import axios from 'axios';

const FacturesInfo = () => {
  const [data, setFacto] = useState({
    n: "",
    total: "",
  })

  useEffect(() => {
    axios.get('/data.json')  // Adjust the path as needed
      .then(response => {
        console.log(response.data);
        setFacto(response.data);
      })
      .catch(error => {
        console.error('Erreur de données:', error);
      });
  }, []);
  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Permet aux éléments de passer à la ligne
    marginTop: '20px',
    padding: '50px',
    justifyContent: 'center', // Centre les éléments horizontalement
  };

  const cardStyle = {
    width: '40%',
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
    fontSize: '20px',
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
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#7d240c',
  };


  return (
   
    <div style={cardContainerStyle}>

      <div className="col-xxl-4 col-md-6" style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            Nombres totale de factures
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
              82
            </span>
          </div>
          <h5 className="card-title" style={cardTitleStyle}>
            Montant total factures
          </h5>
          <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
             {data.total} MGA
            </span>
        </div>
      </div>

      <div className="col-xxl-4 col-md-6" style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            Nombre total de factures payées partiellement
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
              49
            </span>
          </div>
          <h5 className="card-title" style={cardTitleStyle}>
            Montant total factures payés partiellement
          </h5>
          <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
             {data.total} MGA
            </span>
        </div>
      </div>


      <div className="col-xxl-4 col-md-6" style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            Factures impayées
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
              33
            </span>
          </div>
          <h5 className="card-title" style={cardTitleStyle}>
            Montant total factures impayées
          </h5>
          <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
             {data.total} MGA
            </span>
        </div>

      </div>
      <div className="col-xxl-4 col-md-6" style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            Nombre de factures payées totalement
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
              0
            </span>
          </div>
          <h5 className="card-title" style={cardTitleStyle}>
            Montant factures payés
          </h5>
          <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
             {data.total} MGA
            </span>
        </div>
      </div>

    </div>
  );
};

export default FacturesInfo;
