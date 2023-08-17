import React, { useEffect, useState } from 'react';
import RecapEtatOccupation from './RecapEtatOccupation';
import EtatOccupation from './EtatOccupation';

const EtatOccupationEnsemble = () => {

  var urlHtpp = "http://127.0.0.1:9090/";
  const [hebergement, setHebergement] = useState({});
  const [etatOccup,setEtatOccup] = useState([])

  ////:Get Recap 
  useEffect(() => {
    fetch(urlHtpp + 'hebergement-taux-occupation', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json())
      .then(data => { 
        ///console.log(data.hebergementDetail[0])
        setHebergement(data.hebergementDetail[0]) 
        setEtatOccup(data.hebergementOccupe)
        //console.log(data.hebergementOccupe)
      })
      .catch(error => { console.log(error) });
  }, []);

  return (
    <div>
      <h2 className="mb-3 text-center">Etat d'occupation des sites d'Hébergement</h2>
      <div className="mb-5"> {/* Ajout de la classe de marge */}
        <RecapEtatOccupation data={hebergement}/> 
      </div>

      <div>
        <EtatOccupation data={etatOccup}/>
      </div>
    </div>
  );
};

export default EtatOccupationEnsemble;
