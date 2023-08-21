import React from 'react';

const CombinedChart = ({ data }) => {
  // Récupérer tous les noms de délégations
  const allDelegationNames = Array.from(new Set(data.flatMap(siteData => siteData.delegations.map(delegation => delegation.name))));

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
            <th style={{ backgroundColor: '#973116' }}>Total de personnes</th>
          </tr>
        </thead>
        <tbody>
          {groupedData.map((siteData, index) => (
            <tr className="text-center" key={index}>
              <td>{siteData.site}</td>
              {allDelegationNames.map((delegationName) => (
                <td key={delegationName}>
                  {siteData.delegations.find(delegation => delegation.name === delegationName)?.nombrePersonnes || 0}
                </td>
              ))}
              <td>{siteData.totalPersons}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CombinedChart;
