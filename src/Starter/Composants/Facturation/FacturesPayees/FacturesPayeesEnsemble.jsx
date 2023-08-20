import React from 'react';
import RecapFacturesPayees from './RecapFacturesPayees';
import FacturesPayees from './FacturesPayees';

const FacturesPayeesEnsemble = () => {
    return (
        <div>
            <div className="mb-5">
                <h2 className="mb-5 text-center">Récapitulatif des factures totalement payées</h2>
                < RecapFacturesPayees/>
            </div>
            <div>
                <h2 className="mb-3 text-center">Factures totalement payé</h2>
                < FacturesPayees />
            </div>
        </div>
    );
};

export default FacturesPayeesEnsemble;
