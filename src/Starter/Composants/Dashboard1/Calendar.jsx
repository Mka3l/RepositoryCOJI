import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = () => {
  // Données de démonstration pour le calendrier (remplacez-les par les données réelles)
  const calendarData = [
    { day: '2023-08-23', schedule: [
      { time: '08:00', event: 'Départ de l\'hôtel' },
      { time: '10:00', event: 'Entraînement' },
      { time: '13:00', event: 'Dîner' },
      { time: '18:00', event: 'Cérémonie d\'ouverture' },
    ]},
    { day: '2023-08-24', schedule: [
      { time: '07:30', event: 'Petit-déjeuner' },
      { time: '09:00', event: 'Compétition' },
      { time: '12:30', event: 'Déjeuner' },
      { time: '15:00', event: 'Visite touristique' },
    ]},
    { day: '2023-08-25', schedule: [
      { time: '10:00', event: 'Entraînement' },
      { time: '13:00', event: 'Déjeuner' },
      { time: '15:30', event: 'Compétition' },
      { time: '19:00', event: 'Dîner de gala' },
    ]},
    // Ajoutez d'autres jours et leur programme ici
  ];

  // État local pour stocker la date sélectionnée
  const [selectedDate, setSelectedDate] = useState(null);

  // Fonction pour gérer le clic sur une date du calendrier
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container mt-4">
      <h4 style={{ color: '#333', marginBottom: '1rem' }}>Programma Délégation</h4>
      <div className="row">
        <div className="col-md-6">
          <Calendar
            className="custom-calendar" // Classe CSS personnalisée pour le calendrier
            tileClassName="custom-tile" // Classe CSS personnalisée pour les tuiles du calendrier
            calendarType="gregory" si vous préférez le calendrier international
            onClickDay={handleDateClick} // Gère le clic sur une date du calendrier
          />
        </div>
        <div className="col-md-6">
          {selectedDate && (
            <div className="card">
              <div className="card-body ">
                <h5 className="card-title">Programme du {selectedDate.toISOString().substring(0, 10)}</h5>
                {calendarData.find((dayInfo) => dayInfo.day === selectedDate.toISOString().substring(0, 10)) ? (
                  <ul className="list-group list-group-flush">
                    {calendarData.find((dayInfo) => dayInfo.day === selectedDate.toISOString().substring(0, 10)).schedule.map((event, eventIndex) => (
                      <li key={eventIndex} className="list-group-item">
                        <span className="fw-bold">{event.time}</span>: {event.event}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ color: '#555' }} className="m-3">Pas de programme pour cette date</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;
