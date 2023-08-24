import React, { useState } from 'react';
import CalRugby from '../../../assets/CalendrierRugbyAsept/CalendrierRugbyAsept1.jpg';
import CalRugby1 from '../../../assets/CalendrierRugbyAsept/CalendrierRugbyAsept2.jpg';
import CalRugby2 from '../../../assets/CalendrierRugbyAsept/CalendrierRugbyAsept3.jpg';


const YourComponent = () => {
    const images = [CalRugby, CalRugby2, CalRugby1,];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const buttonStyle = {
        backgroundColor:'#973116',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        float: 'right'
      };
    
    return (
        <div>
            <button style={buttonStyle} onClick={handleNextClick}>Suivant</button>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                    alt={`Rugby${currentImageIndex}`}
                    src={images[currentImageIndex]}
                    style={{ width: '100%', maxWidth: '100%', height: 'auto', margin: '0 8px' }}
                />
            </div>
            
        </div>
    );
};

export default YourComponent;
