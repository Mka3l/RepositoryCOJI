import React, { useState } from 'react';
import AdministrationNationale from './AdministrationNationale';
import AntiDopage from './AntiDopage';
import Communication from './Communication';
import CompetitionAccreditation from './CompetitionAccreditation';
import CoordonnateurGeneral from './CoordonnateurGeneral';
import DirectionExecutive from './DirectionExecutive';
import Evenementiel from './Evenementiel';
import Hebergement from './Hebergement';
import Infrastructure from './Infrastructure';
import Logistique from './Logistique';
import Medicale from './Medicale';
import MobilisationSociale from './MobilisationSocial';
import Partenariat from './Partenariat';
import PromotionJeux from './PromotionJeux';
import ProtocoleNationale from './ProtocoleNationale';
import ProtocoleTechnique from './ProtocoleTechnique';
import RelationPublique from './RelationPublique';
import Restauration from './Restauration';
import Securite from './Securite';
import SystemeInformation from './SystemeInformation';
import Transport from './Transport';
import TresorerieGenerale from './TresorerieGenerale';
import VoletJeunesse from './VoletJeunesse';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';




const components = [
    { title: "Administration Nationale", component: AdministrationNationale },
    { title: "Anti-Dopage", component: AntiDopage },
    { title: "Communication", component: Communication },
    { title: "Compétition et Accréditation", component: CompetitionAccreditation },
    { title: "Coordonnateur Général", component: CoordonnateurGeneral },
    { title: "Direction Exécutive", component: DirectionExecutive },
    { title: "Evénementiel", component: Evenementiel },
    { title: "Hébergement", component: Hebergement },
    { title: "Infrastructure", component: Infrastructure },
    { title: "Logistique", component: Logistique },
    { title: "Médicale", component: Medicale },
    { title: "Mobilisation Sociale", component: MobilisationSociale },
    { title: "Partenariat", component: Partenariat },
    { title: "Promotion des Jeux", component: PromotionJeux },
    { title: "Protocole Nationale", component: ProtocoleNationale },
    { title: "Protocole Technique", component: ProtocoleTechnique },
    { title: "Relation Publique", component: RelationPublique },
    { title: "Restauration", component: Restauration },
    { title: "Sécurité", component: Securite },
    { title: "Système d'Information", component: SystemeInformation },
    { title: "Transport", component: Transport },
    { title: "Trésorerie Générale", component: TresorerieGenerale },
    { title: "Volet Jeunesse", component: VoletJeunesse },
];



const AApointFocauxEnsemble = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState(null);

    const openModal = (component) => {
        setSelectedComponent(component);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedComponent(null);
    };

    return (
        <div style={{ marginTop: '0px' }}>
            <h2 style={{
                      
                      position: 'sticky',
                      top: '150px',
                      backgroundColor: 'white',
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '50px', 
                      textAlign: 'center', 
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                      color: '#333'
                      }}
            
            
            
            >Séléctionner Commission</h2>
            {components.map((component, index) => (
                <div key={index} onClick={() => openModal(component)} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                    <h2>{component.title}</h2>
                </div>
            ))}
            <Modal show={showModal} onHide={closeModal} dialogClassName="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title style={{
                      position: 'sticky',
                      top: '150px',
                      backgroundColor: 'white',
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '24px', 
                      textAlign: 'center', 
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                      color: '#333'
                      }}>{selectedComponent?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedComponent?.component && <selectedComponent.component />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default AApointFocauxEnsemble;
