import React from "react";
const CardDelegation = ({nomPays,nombre}) =>
{
    const cardStyle = {
        width: '20%',
        border: "none",
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Nouveau style de box shadow
        backgroundColor: '#dadada',
        padding: '20px',
        marginRight: '50px',
        marginBottom: '20px',
        textAlign: 'center', // Centre le contenu du texte horizontalement
      };
    
      const cardTitleStyle = {
        fontSize: '25px',
        fontWeight: 'bold',
        marginBottom: '5px',
      };
    
      const cardTextContentStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centre les contenus horizontalement
        marginBottom: '15px',
      };
    
      const cardTextValueStyle = {
        fontSize: '35px',
        fontWeight: 'bold',
        color: '#7d240c',
      };
    return(
        <div style={{ ...cardStyle }}>
        <div className="card-body">
          <h5 className="card-title" style={cardTitleStyle}>
            {nomPays}
          </h5>
          <div className="card-text" style={cardTextContentStyle}>
            <span className="text-success pt-1 fw-bold" style={cardTextValueStyle}>
              {nombre}
            </span>
            <span className="card-text" style={{ fontSize: '20px', color: '#555' }}>
              Total Délégation {nomPays}
            </span>
          </div>
        </div>
      </div>
    )
}
export default CardDelegation;