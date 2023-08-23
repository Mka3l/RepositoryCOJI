import React, { useRef, useState } from 'react';

const DashRestauration = ({ date }) => {
  const numberWithThousandsSeparator = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const data = [
    { 'dateJOI': '2023-08-16', 'EnCompetition': 15, 'platEnCompetition': 3002, 'AuRepos': 3, 'PlatAuRepos': 1600 },
    { 'dateJOI': '2023-08-17', 'EnCompetition': 12, 'platEnCompetition': 4000, 'AuRepos': 3, 'PlatAuRepos': 602 },
    { 'dateJOI': '2023-08-18', 'EnCompetition': 10, 'platEnCompetition': 3500, 'AuRepos': 3, 'PlatAuRepos': 1102 },
    { 'dateJOI': '2023-08-19', 'EnCompetition': 14, 'platEnCompetition': 2602, 'AuRepos': 3, 'PlatAuRepos': 2000 },
  ];

  const colors = {
    violet: '#8A2BE2',
    jaune: '#FFFF00',
    vert: '#008000',
    rouge: '#A52A2A',
  };

  const divStyle = {
    display: 'flex',
    width: '290px',
    height: '50px',
    background: colors.violet,
    borderRadius: '15px',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20px',
    marginBottom: '25px',
  };

  const styleHeberge = {
    marginTop: '50px',
    marginRight: '170px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-start',
    width: '420px',
    height: '150px',
  };

  const compoGlade = {
    width: '100%',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
  };
  var dateFiltre = useRef();
  const [dateAffichage,setDateAffiche] = useState(new Date().toLocaleDateString());

  console.log(date.date.date);
  const [dateChoix,setDateChoix] = useState(date.date.date);
  

  return (
    <div style={compoGlade}>
      {data.map((valeur, indexVal) => (
        date.date.date === valeur.dateJOI && (
          <div style={styleHeberge} key={indexVal}>
            <div>
              <div style={{ ...divStyle, background: 'rgb(129 255 222)' }}>
                <h6>Pour les Athlètes en compétition <span style={{ fontSize: '14pt', fontWeight: '700' }}>{valeur.EnCompetition}</span></h6>
              </div>
              <div style={{ ...divStyle, background: 'rgb(129 255 222)' }}>
                <h6>Plats Servis <span style={{ fontSize: '14pt', fontWeight: '700' }}>{numberWithThousandsSeparator(valeur.platEnCompetition)}</span></h6>
              </div>
            </div>
            <div>
              <div style={{ ...divStyle, background: 'rgb(218 255 251)' }}>
                <h6>Pour les Athlètes au repos <span style={{ fontSize: '14pt', fontWeight: '700' }}>{valeur.AuRepos}</span></h6>
              </div>
              <div style={{ ...divStyle, background: 'rgb(218 255 251)' }}>
                <h6>Plats Servis <span style={{ fontSize: '14pt', fontWeight: '700' }}>{numberWithThousandsSeparator(valeur.PlatAuRepos)}</span></h6>
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default DashRestauration;
