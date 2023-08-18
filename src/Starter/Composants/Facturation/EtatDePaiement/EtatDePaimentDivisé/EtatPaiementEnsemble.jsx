import React from 'react';
import EtatPaiementGeneral from './EtatPaiementGeneral';
import SituationPremierAcompte from './SituationPremierAcompte';
import SituationDeuxiemeAcompte from './SituationDeuxiemeAcompte';
import SituationFinanciereDePaiment from './SituationFInanciereDePaiement';


const EtatPaiementEnsemble = () => {
    return (
        <div>

            <div className="mb-3"> {/* Ajout de la classe de marge */}
                <EtatPaiementGeneral />
            </div>
            <div className="mb-3">
                <SituationPremierAcompte />
            </div>
            <div className="mb-3"> {/* Ajout de la classe de marge */}
                <SituationDeuxiemeAcompte />
            </div>
            <div>
                <SituationFinanciereDePaiment />
            </div>
        </div>
    );
};

export default EtatPaiementEnsemble;
