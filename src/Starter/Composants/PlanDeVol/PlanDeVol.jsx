import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import url from '../../urlHtpp';

const PlanDeVol = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [planVol, setPlanVol] = useState([]);

    useEffect(() => {
        fetch(url.urlHtpp + "plan-vol", {
            'Header':"Content-Type:application/json"
        })
        .then(response => response.json())
        .then(data => console.log("DATA RETOUT : ", data))

    });

    return (
        
        <div>
            <Button variant='danger' onClick={handleShow}>
                Montre le plan de vol
                {}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Formulaire</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="date_vol">
                            <Form.Label>Date de vol</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="nom_vol">
                            <Form.Label>Nom de vol</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="heure_depart">
                            <Form.Label>Heure de départ</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="heure_arrivee">
                            <Form.Label>Heure d'arrivée</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="pays">
                            <Form.Label>Pays</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="nom_complet">
                            <Form.Label>Nom complet</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="titre">
                            <Form.Label>Titre</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="nombre">
                            <Form.Label>nombre</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="qualite">
                            <Form.Label>Qualité</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="observation">
                            <Form.Label>Observation</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                        Modifier
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Enregistrer
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                   
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default PlanDeVol;
