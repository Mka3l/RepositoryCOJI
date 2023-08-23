import React from 'react';
import Calendar from './Calendar';
import AccommodationCard from './AccommodationCard';
import Overview from './Overview';
import FilterAndSearch from './FilterAndSearch';

const Dashboard = () => {
    // Vos données et états seront gérés ici

    const styles = {
        container: {
            backgroundColor: 'rgba(249, 249, 249, 0.9)',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            margin: '0 auto', // Pour centrer le contenu horizontalement
            maxWidth: '1200px', // Limiter la largeur pour une meilleure vue
        },
        section: {
            marginBottom: '2rem', // Espacement entre les sections
        },
        
    };

    return (
        <div>
            <div style={styles.container}>
                <div className="row">
                    <div className="col-md-6">
                         {/* Section pour l'aperçu */}
                         <div style={styles.section}>
                            <Overview />
                        </div>
                         {/* Section pour les détails de délégation */}
                         <div style={styles.section}>
                          
                        </div>
                        
                    </div>

                    <div className="col-md-6">
                        {/* Section pour le calendrier */}
                        <div style={styles.section}>
                            <Calendar />
                        </div>
                       
                        {/* Section pour l'hébergement */}
                        <div style={styles.section}>
                            <AccommodationCard />
                        </div>
                        {/* Section pour les filtres et la recherche (placée en haut à gauche) */}
                        <div style={styles.section}>
                            <FilterAndSearch />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
