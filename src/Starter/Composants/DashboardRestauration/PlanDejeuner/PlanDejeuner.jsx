import React, { useState, useRef, useEffect } from 'react';
import PlanCompetition from '../ComponentGeneral/PlanCompetition';
import PlanNonCompetition from '../ComponentGeneral/PlanNonCompetition';
import ModalCRUD from '../ComponentGeneral/ModalCRUD';
import { Button, Modal } from 'react-bootstrap';
import url from '../../../urlHtpp';
import '../PlanDejeuner/PlanDejeuner.css'


const PlanDejeuner = () => {


  const [showQRCode, setShowQRCode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [delegationValue, setDelegationValue] = useState();

  const [planningDejeunerCom, setPlanningDejeunerComp] = useState([]);

  const [planningDejeunerRepos, setPlanningDejeunerRepos] = useState([]);
  const [getPLAN, setGetPlan] = useState(true)

  useEffect(() => {
    console.log("ENTRER")
    fetch(url.urlHtpp + "planning-restauration-details/dejeuner", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => { console.log(data.data.dejeunerComp), setPlanningDejeunerComp(data.data.dejeunerComp), setPlanningDejeunerRepos(data.data.dejeunerRepos) })
      .catch(error => { console.log(error) })
  }, [getPLAN])

  const nomAD = useRef();
  const del = useRef();

  // const AddRestauration = () => {
  //   const restaurationAD = {
  //     "nom": nomAD.current.value,
  //     "delegation_id": del.current.value
  //   }

  //   console.log(JSON.stringify(restaurationAD));
  //   fetch(urlHtpp + "restaurations", {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(restaurationAD)
  //   }).then(response => response.json())
  //     .then(data => { console.log(data) })
  //     .catch(error => { console.log(error) })
  // }

  const listDelegation = [
    'Madagascar',
    'Comores',
    'Mayotte',
    'Maurice',
    'Seychelles',
    'Maldives',
  ]
  const listDisciplines = [
    "Athlétisme",
    "Badminton",
    "Basket",
    "Boxe",
    "Cyclisme",
    "Football",
    "Haltérophilie",
    "Handball",
    "Judo",
    "Kick boxing",
    "Karaté",
    "Lutte",
    "Natation",
    "Pétanque",
    "Rugby à 7",
    "Taekwondo",
    "Tennis",
    "Tennis de Table",
    "Volley-ball"
  ]

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleQRCode = () => {
    if (showQRCode) {
      setShowQRCode(false);
      setPdfUrl(null);
    } else {
      setShowQRCode(true);
      generatePDF();
    }
  };
  const handleCombinedClick = () => {
    toggleQRCode();
    handleShowModal();
  };

  var delegationfiltre = useRef();
  const trierDelegation = () => {
    setDelegationValue(delegationfiltre.current.value);
  }
  const sousTitle = {
    fontSize: '15pt',
    fontWeight: '400',
    color: 'rgb(66, 133, 244)',
    padding: '30px 0px 20px',
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
  }
  
  const buttonStyle = {
    border: 'none',
    padding: '20px',
    borderRadius: '5px',
    background: '#b3b3b3',
    fontWeight: '700',
  }
  const delegation = useRef();
  const discipline = useRef();
  const lieu_restauration = useRef();
  const nb_prevu = useRef();
  const date = useRef();
  const type_personne = useRef();

  const insertPlanning = () => {
    const data = {
      "delegation": { "id": delegation.current.value },
      "discipline": { "id": discipline.current.value },
      "lieu_restauration_id": { "id": lieu_restauration.current.value },
      "nb_prevu": nb_prevu.current.value,
      "date_heure_repa": date.current.value,
      "type_personne": type_personne.current.value
    }
    fetch(url.urlHtpp + 'planning-restauration', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(response => response.json()).then(data => { console.log(data) }).catch(error => { console.log(error) })
    setGetPlan(false)
  }


  // console.log(planningDejeuner.dejeunerComp)
  // console.log(planningDejeuner.dejeunerRepos)

  return (<div>

    <div id='pdf-content' style={{ width: '95%', margin: 'auto' }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        boxShadow: '0px 5px 10px 4px #9f9f9f',
        color: 'rgb(255 255 255)',
        textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
        padding: '15px',
        background: ' #973116',
        textAlign: 'center',
      }} className="mb-3 text-center">Planning Déjeuner</h2>
      <div className="filter-container">
        <label className="filter-label" htmlFor="delegationSelect">Trier par délégation :</label>
        <select
          ref={delegationfiltre}
          onChange={trierDelegation}
          className="filter-select"
          id="delegationSelect"
          name="delegationSelect"
        >
          <option value="">Tous</option>
          {listDelegation.map((delegation, index) => (
            <option key={index} value={index + 1}>
              {delegation}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-5">
        <h5 style={sousTitle}>Planning Déjeuner En Compétition
          <ModalCRUD Action={"Inserer Delegation"} Titre={"Inserer Delegation"}>
            <p>Type Personne en restauration</p>
            <p>
              <select ref={type_personne} className='form-control' required>
                <option value="10">Dejeuner en compétition</option>
                <option value="20">Dejeuner en repos</option>
              </select>
            </p>
            <p>Delegation</p>

            <p>
              <select className='form-control' ref={delegation} required>
                {
                  listDelegation.map((delegation, index) => (
                    <option key={index} value={index + 1}>{delegation}</option>
                  ))
                }
              </select>
            </p>
            <p>Disciplines</p>
            <p>
              <select className='form-control' ref={discipline} required>
                {
                  listDisciplines.map((discipline, index) => (
                    <option key={index} value={index + 1}>{discipline}</option>
                  ))
                }
              </select>
            </p>
            <p>Nom Restauration</p>
            <p><select className='form-control' ref={lieu_restauration} required>
              <option value={1} >Carlton Anosy</option>
              <option value={2} >Stade Mahamasina</option>
              <option value={3} >CCI Ivato</option>
            </select></p>
            <p>Nombre personnes</p>
            <p><input type="number" min={1} name="" id="" ref={nb_prevu} /></p>
            <p>Date et Heure de competition</p>
            <p><input type="datetime-local" name="" id="" ref={date} /></p>
            <p><button className='btn btn-success' onClick={insertPlanning} >Inserer</button></p>
          </ModalCRUD>
        </h5>
        <PlanNonCompetition dataResto={planningDejeunerCom} />
      </div>
      <div>
        <h5 style={sousTitle}> Planning Déjeuner  en repos</h5>
        <PlanCompetition dataResto={planningDejeunerRepos} />
      </div>
    </div>
    <button style={buttonStyle} onClick={handleCombinedClick}>
      {showQRCode ? 'Annuler' : 'Import fichier'}
    </button>
    {showQRCode && <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header>
        <Modal.Title>{'Insertion Rapport Restauration'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Importer le rapport de restauration</p>
        <p><input type="file" name="rapport" id="" /></p>

        <input type="submit" value="inserer" />
      </Modal.Body>
      <Button style={{ background: "red" }} variant="secondary" onClick={handleCloseModal}>
        Fermer
      </Button>
    </Modal>
    }
  </div>
  )
};

export default PlanDejeuner;
