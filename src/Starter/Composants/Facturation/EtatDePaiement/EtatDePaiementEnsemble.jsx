import React from 'react';
import RecapitulatifEtatDePaiement from './RecapitulatifEtatDePAiement';
import EtatDePaiementFinal from './EtatDePaiementFinal';

const EtatDePaiementEnsemble = () => {
    return (
        <div>
            <h2 className="mb-3 text-center">Récapitulatif Etat de Paiement</h2>
            <div className="mb-5">
                < RecapitulatifEtatDePaiement/>
            </div>

            <h2 className="mb-3 text-center">Etat de Paiement</h2>
            <div>
                
                < EtatDePaiementFinal />
            </div>
        </div>
    );
};

export default EtatDePaiementEnsemble;
