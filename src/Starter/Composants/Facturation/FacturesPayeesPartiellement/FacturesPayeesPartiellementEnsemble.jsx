import React from 'react';
import RecapFacturesPayeesPartiellement from './RecapFacturesPayeesPartiellement';
import FacturesPayeesPartiellement from './FacturesPayeesPartiellement';

const FacturesPayeesPartiellementEnsemble = () => {
    return (
        <div>
            <div className="mb-5">
                <h2 className="mb-5 text-center">Récapitulatif de factures partiellement payées</h2>
                < RecapFacturesPayeesPartiellement/>
            </div>
            <div>
                <h2 className="mb-3 text-center">Factures partiellement payées</h2>
                < FacturesPayeesPartiellement />
            </div>
        </div>
    );
};

export default FacturesPayeesPartiellementEnsemble;
