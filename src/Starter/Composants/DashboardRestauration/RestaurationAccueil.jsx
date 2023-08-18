import React, { useEffect, useRef, useState } from 'react';
import AjoutHebergement from '../HebergementFinal/AjoutHebergement';
import CompResumeResto from './CompResumeResto';
const RestaurationCard = () => {

  var urlHtpp = "http://127.0.0.1:9090/";

  const [delegations, setDelegations] = useState([]);
  useEffect(() => {
    fetch(urlHtpp + "delegations", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json())
      .then(data => { console.log(data),setDelegations(data) })
      .catch(error => { console.log(error) })
  }, []);

  const nomAD = useRef();
  const del = useRef();

  const AddRestauration = () => {
    const restaurationAD = {
      "nom": nomAD.current.value,
      "delegation_id": del.current.value
    }

    console.log(JSON.stringify(restaurationAD));
    fetch(urlHtpp + "restaurations", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(restaurationAD)
    }).then(response => response.json())
      .then(data => { console.log(data) })
      .catch(error => { console.log(error) })
  }

  const data = [{
    "donneesRestauration": [
      {
        "titre": "Restauration déjeuner compétiteurs",
        "valeur": "115",
        "unite": "Têtes"
      },
      {
        "titre": "Restauration déjeuner non-compétiteurs",
        "valeur": "190",
        "unite": "Têtes"
      },
      {
        "titre": "Restauration Dîner compétiteurs",
        "valeur": "140",
        "unite": "Têtes"
      },
      {
        "titre": "Restauration Dîner non-compétiteurs",
        "valeur": "80",
        "unite": "Têtes"
      }
    ]
  }]
  

  const cardContainerStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    gap: '30px',
    marginTop: '20px',
    padding: '0px 100px',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  };


  return ( <>

      <div style={cardContainerStyle}>
        { data[0].donneesRestauration.map((item, index) => (
          <CompResumeResto
            key={index}
            titre={item.titre}
            valeur={item.valeur}
            unite={item.unite}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurationCard;
