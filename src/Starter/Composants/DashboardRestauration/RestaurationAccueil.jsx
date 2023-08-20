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
      <div>
        <AjoutHebergement Action={"Ajout Restauration"} Titre={"Ajout Restauration"}>
            <p>Delegation</p>
            <p> <select className='form-control' ref={del}>
                <option>Madagascar</option>
                <option>Comores</option>
                <option>Maldives</option>
                <option>Mayottes</option>
                <option>La Reunion</option>
                <option>Seychelles</option>
            </select>
            </p>
            <p>Nom Restauration</p>
            <p><select className='form-control' ref={del}>
              
                <option>Carlton Anosy</option>
                <option>Stade Mahamasina</option>
                <option>CCI Ivato</option>
              
            </select></p>
            <p>Nombre personnes</p>
            <p><input type="number" min={1} name="" id="" /></p>
            <p>Date et Heure de competition</p>
            <p><input type="datetime-local" name="" id="" /></p>
            <p><button className='btn btn-success' onClick={AddRestauration}>Ajout Restauration</button></p>
          </AjoutHebergement>
      </div>
    </>
  );
};

export default RestaurationCard;
