import React from 'react';
import RecapFacturesImpayees from './RecapFacturesImpayees';
import FacturesImpayees from './FacturesImpayees';

const FacturesImpayeesEnsemble = () => {
    return (
        <div>
            <div className="mb-5 text-center">
                <h2>Récapitulatifs des factures impayées</h2>
                < RecapFacturesImpayees/>
            </div>
            <div>
                <h2 className="mb-3 text-center">Factures impayées </h2>
                < FacturesImpayees />
            </div>
        </div>
    );
};

export default FacturesImpayeesEnsemble;
