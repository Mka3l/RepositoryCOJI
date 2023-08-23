import React from 'react';

const EtatDePaiementTable = ({ data }) => {
  // Récupérer tous les noms de délégations
  const allDelegationNames = Array.from(new Set(data.flatMap(siteData => siteData.delegations.map(delegation => delegation.name))));

  const numberWithThousandsSeparator = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  // Regrouper les données par site et calculer le nombre total de personnes pour chaque site
  const groupedData = data.map((siteData) => {
    const totalPersons = siteData.delegations.reduce((total, delegation) => total + delegation.nombrePersonnes, 0);
    return { site: siteData.site, totalPersons, delegations: siteData.delegations };
  });

  return (
    <div>
      <table className="table table-striped table-bordered ">
        <thead>
          <tr className="text-center">
            <th style={{ backgroundColor: '#973116' }}>Site</th>
            {allDelegationNames.map((delegationName) => (
              <th style={{ backgroundColor: '#973116' }} key={delegationName}>{delegationName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {groupedData.map((siteData, index) => (
            <tr className="text-center" key={index}>
              <td>{siteData.site}</td>
              {allDelegationNames.map((delegationName) => (
                <td key={delegationName}>
                  {numberWithThousandsSeparator(
                    siteData.delegations.find(delegation => delegation.name === delegationName)?.nombrePersonnes || 0
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EtatDePaiementTable;
