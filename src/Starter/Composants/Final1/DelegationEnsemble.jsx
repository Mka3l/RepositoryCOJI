import React, { useRef,useState,useEffect } from 'react';
import DelegationAfficherDetails from './DelegationAfficherDetails';
import DelegationClic from './DelegationClic';
import AjoutHebergement from '../HebergementFinal/AjoutHebergement';
import url from '../../urlHtpp';
const DelegationEnsemble = () => {

  var urlHtpp = "http://127.0.0.1:9090/";

  const NameDelegation = [
    { "nom": "Madagascar" }, { "nom": "Maurice" },
    { "nom": "Comores" }, { "nom": "Mayotte" },
    { "nom": "Maldives" }, { "nom": "Seychelle" },
    { "nom": "La Réunion" }
  ];


  const nomPays = useRef();
  const nombre = useRef();

  const AddDelegation = () => {
    const delegation = {
      "nom": nomPays.current.value,
      "nombre": nombre.current.value
    }
    fetch(urlHtpp+"delegations", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(delegation)

    }).then(response => response.json())
      .then(data => { console.log(data) })
      .catch(error => { console.log(error) });
  }
  const inputButton = {
    width: '150px',
    height: '40px',
    fontWeight: '700',
    background: 'rgb(43 76 196 / 92%)',
  }
  const inputNormal = {
    boxShadow: 'rgb(190 190 190) 5px 5px 3px 0px inset',
  }
  const iconlist = {
    width: '30px',
    margin:'10px 10px 9px 645px',
    position: 'absolute',
  }
  const labelStyle = {
    letterSpacing: '1px',
    fontSize: '16pt',
    fontWeight: '300',
  }


  const [repartitionTotal, setRepartitionTotal] = useState([]);
  const [getPLAN,setGetPlan] = useState(true)

  useEffect(()=>{
    console.log("ENTRER")
    fetch(url.urlHtpp+"repartition-delegation/total",{
      method:'GET',
      headers:{'Content-Type':'application/json'},
    })
    .then(response => response.json())
    .then(data=>{console.log(data.data),setRepartitionTotal(data.data)})
    .catch(error=>{console.log(error)})
  },[getPLAN])

  return (
    <div style={{ marginLeft:"50px",marginTop: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition de la Délégation par Pays (nombre total {repartitionTotal})</h2>
      <div style={{ marginBottom: '50px' }}>
        <DelegationClic/> 
      </div>
      <div>
        <AjoutHebergement Action={"Ajout Délégation"} Titre={"Ajout Délégation"}>
          <p style={labelStyle}>Choisir Pays</p>
          <span style={iconlist}>▼</span>
          <p>
            <select className='form-control' ref={nomPays} style={inputNormal}>
            {NameDelegation.map((namePays, indexP) =>
              <option value={namePays.nom} key={indexP}>{namePays.nom}</option>
            )};
            </select>
          </p>
          <p style={labelStyle}>Entrer le nombre</p>
          <p>
            <input style={inputNormal} type='number' className='form-control' ref={nombre} placeholder='Entrer un nombre ...' />
          </p>
          <p> <button style={inputButton} className='btn btn-success' onClick={AddDelegation}>Ajouter</button></p>
        </AjoutHebergement>
      </div>
      <div>
        <DelegationAfficherDetails/>
      </div>
    </div>
  );
};

export default DelegationEnsemble;
