import React, { useRef } from 'react';
import DelegationAfficherDetails from './DelegationAfficherDetails';
import DelegationClic from './DelegationClic';
import AjoutHebergement from '../HebergementFinal/AjoutHebergement';

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
  return (
    <div style={{ marginLeft:"50px",marginTop: '20px' }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '900',
          boxShadow: '0px 5px 10px 4px #9f9f9f',
          color: 'rgb(255 255 255)',
          textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
          padding: '30px',
          background:' #973116',
          textAlign: 'center',
        }}>Répartition du nombre de personnes par Délégation (nombre total 4 164)</h2>
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
