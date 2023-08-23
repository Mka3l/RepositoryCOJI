import React, { useState, useEffect, useRef } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import '../../HebergementStyles/hebergementFormulaire.css'
import '../../HebergementStyles/TableauStyles.css';
import configUrl from '../../../../urlHtpp';


const HebergementFormulaire = () => {
  const [data, setData] = useState([]);
  const [pays, setPays] = useState([]);
  const [sites, setSites] = useState([]);
  const [hebergements, setHebergement] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    NomHebergement: '',
    RibHebergement: '',
    Zones: '',
    DatesEntree: '',
    DateSortie: '',
    PrixJournalier: '',
    Delegation: '',
    PrixHebergement: '',
  });

  useEffect(() => {
          fetch(configUrl.url + 'pays', {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' },
          })
            .then(response => response.json())
            .then(data => {
              setPays(data.data);
            })
            .catch(error => {
              console.error(error);
            });

          fetch(configUrl.url + 'sites', {
            method: 'GET',
          })
            .then(response => response.json())
            .then(data => {
              setSites(data.data);
            })
            .catch(error => {
              console.error(error);
            });
            ////===========================
            fetch(configUrl.url+'',{
              method:"GET",
              headers :{"Content-Type":"application/json"}
            }).then()
            .then()
            .catch()
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const AjoutDelegation = () => {
    setShowModal(true);
    fetch(configUrl.url + 'hebergements', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => {
        setHebergement(data.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const ajoutHebegementDelegation = () => {
    const hebergementDe = {
      date_entree: date_entre.current.value,
      date_sortie: date_sortie.current.value,
      delegations: {
        id: delegation_id.current.value,
      },
      hebergement: {
        id: hebergement_id.current.value,
      },
    };

    fetch(configUrl.url + 'hebergement_delegation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(hebergementDe),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const columns = [
    'Nom Hébergement',
    'Rib Hébergement',
    'Zone',
    'Date Entree',
    'Date Sortie',
    'Prix Journalier',
    'Delegation',
    'Prix Hébergement',
  ];

  const hebergement_id = useRef();
  const date_entre = useRef();
  const date_sortie = useRef();
  const delegation_id = useRef();
  const prix_hebergement = useRef();

  return (
    <div className="m-5">
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ajout Délégation par Site d'Hébergement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Le reste du contenu du modal reste inchangé */}
          {/* Champs du formulaire */}
          <label className='label'>
            Hebergements
            <select
              ref={hebergement_id}
              value={formData.Delegation}
              onChange={e => setFormData({ ...formData, Delegation: e.target.value })}
            >
              <option value="">Sélectionnez un Hébergement</option>
              {hebergements.map((row, indexRow) =>
                <option key={indexRow} value={row.id}>{row.nom_hebergement}-{row.sites.nom_site}</option>
              )}
            </select>
          </label>

          <label className='label'>
            Date d'Entrée:
            <input
              ref={date_entre}
              type="date"
              value={formData.DatesEntree}
              onChange={e => setFormData({ ...formData, DatesEntree: e.target.value })}
            />
          </label>

          <label className='label'>
            Date de Sortie:
            <input
              ref={date_sortie}
              type="date"
              value={formData.DateSortie}
              onChange={e => setFormData({ ...formData, DateSortie: e.target.value })}
            />
          </label>

          <label className='label'>
            Délégation:
            <select
              ref={delegation_id}
              value={formData.Delegation}
              onChange={e => setFormData({ ...formData, Delegation: e.target.value })}
            >
              <option value="">Sélectionnez une délégation</option>
              {pays.map((row, indexRow) =>
                <option key={indexRow} value={row.id}>{row.nom_pays}</option>
              )}
            </select>
          </label>

          <label className='label'>
            Prix de l'Hébergement:
            <input
              ref={prix_hebergement}
              type="text"
              value={formData.PrixHebergement}
              onChange={e => setFormData({ ...formData, PrixHebergement: e.target.value })}
            />
          </label>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="buttonStyle"
            onClick={ajoutHebegementDelegation}
            style={{ display: 'block', margin: '0 auto', marginBottom: '50px' }}
          >
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
{/* ddjdkdkdkdkd */}
      <button
        className="buttonStyle"
        onClick={AjoutDelegation}
        style={{ float: 'left', marginBottom: '50px' }}
      >
        {showModal ? 'Fermer le formulaire' : "Ajout Délégation par Site d'Hébergement"}
      </button>
      <table className="tableStyle" style={{ margin: '0px' }}
      >
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th className="thStyle" key={index}>{column} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="tdStyle">{row.nom_hebergement}</td>
              <td className="tdStyle">{row.rib_hebergement}</td>
              <td className="tdStyle">{row.zone}</td>
              <td className="tdStyle">{row.date_entree}</td>
              <td className="tdStyle">{row.date_sortie}</td>
              <td className="tdStyle">{row.prix_journalier}</td>
              <td className="tdStyle">{row.delegation}</td>
              <td className="tdStyle">{row.prix_hebergement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HebergementFormulaire;
