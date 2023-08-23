import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, Divider, Card, CardContent } from '@mui/material';
import 'react-calendar/dist/Calendar.css';
import ProgramCalendar from './CalendrierTransport';

const DelegationDetails = ({ selectedDelegation }) => {
  const delegationDetailsData = {
    name: 'Madagascar',
    schedule: [
      { day: '2023-07-30', startLocation: 'Tana Waterfront', endLocation: 'Stade d\'Andohatapenaka', distance: 10, consumption: 7.5 },
      { day: '2023-07-31', startLocation: 'Stade d\'Andohatapenaka', endLocation: 'Piscine Olympique', distance: 5, consumption: 4.2 },
      // Ajoutez d'autres détails de déplacement pour la délégation
    ],
  };

  const totalVehicles = 20; // Remplacez par le nombre réel de véhicules
  const availableVehicles = 15; // Remplacez par le nombre réel de véhicules disponibles
  const occupiedVehicles = totalVehicles - availableVehicles;

  const styles = {
    container: {
      display: 'flex',
      marginTop: '4rem',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    detailsContainer: {
      flex: 2,
      backgroundColor: '#f9f9f9',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    card: {
      flex: 1,
      marginLeft: '1rem',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      color: '#333',
      marginBottom: '1rem',
    },
    subHeading: {
      color: '#555',
      borderBottom: '1px solid #ddd',
      paddingBottom: '0.5rem',
      marginBottom: '1rem',
    },
    listItem: {
      marginBottom: '0.5rem',
    },
    programDetails: {
      marginTop: '1rem',
    },
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div style={styles.container}>
      <div style={styles.detailsContainer}>
        <ProgramCalendar onDateChange={handleDateChange} />
        {selectedDate && (
          <div style={styles.programDetails}>
            <Typography variant="h5" style={styles.subHeading}>Déplacements de la délégation</Typography>
            {delegationDetailsData.schedule
              .filter((movement) => movement.day === selectedDate.toISOString().slice(0, 10))
              .map((movement, index) => (
                <div key={index}>
                  <List>
          {delegationDetailsData.schedule.map((movement, index) => (
            <ListItem key={index} style={styles.listItem}>
              <ListItemText primary={`Jour : ${movement.day}`} secondary={`Trajet : ${movement.startLocation} → ${movement.endLocation} | Distance : ${movement.distance} km | Consommation estimée : ${movement.consumption} L/100km`} />
            </ListItem>
          ))}
        </List>
                </div>
              ))}
          </div>
        )}
      </div>
      <Card style={styles.card}>
        <CardContent>
          <Typography variant="h6">Détails généraux</Typography>
          <Divider />
          <Typography>Total de véhicules : {totalVehicles}</Typography>
          <Typography>Véhicules disponibles : {availableVehicles}</Typography>
          <Typography>Véhicules occupés : {occupiedVehicles}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default DelegationDetails;
