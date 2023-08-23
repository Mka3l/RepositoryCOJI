import React from 'react';
import RecapFacturesPayeesPartiellement from './RecapFacturesPayeesPartiellement';
import FacturesPayeesPartiellement from './FacturesPayeesPartiellement';

const FacturesPayeesPartiellementEnsemble = () => {
    return (
        <div>
            <div className="mb-5">
                <h2  style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          boxShadow: '0px 5px 10px 4px #9f9f9f',
          color: 'rgb(255 255 255)',
          textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
          padding: '15px',
          background:' #973116',
          textAlign: 'center',
        }} className="mb-5 text-center">Récapitulatif de factures partiellement payées</h2>
                < RecapFacturesPayeesPartiellement/>
            </div>
            <div>
                <h2  style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          boxShadow: '0px 5px 10px 4px #9f9f9f',
          color: 'rgb(255 255 255)',
          textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
          padding: '15px',
          background:' #973116',
          textAlign: 'center',
        }} className="mb-3 text-center">Factures partiellement payées</h2>
                < FacturesPayeesPartiellement />
            </div>
        </div>
    );
};

export default FacturesPayeesPartiellementEnsemble;
