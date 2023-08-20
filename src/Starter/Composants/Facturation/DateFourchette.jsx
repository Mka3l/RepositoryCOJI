import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DateRangeSelector = () => {
  const [selectedFromDate, setSelectedFromDate] = useState(null);
  const [selectedToDate, setSelectedToDate] = useState(null);
  const [showFromCalendar, setShowFromCalendar] = useState(false);
  const [showToCalendar, setShowToCalendar] = useState(false);

  const handleFromDateChange = date => {
    setSelectedFromDate(date);
    setShowFromCalendar(false);
  };

  const handleToDateChange = date => {
    setSelectedToDate(date);
    setShowToCalendar(false);
  };

  const toggleFromCalendar = () => {
    setShowFromCalendar(!showFromCalendar);
    setShowToCalendar(false);
  };

  const toggleToCalendar = () => {
    setShowToCalendar(!showToCalendar);
    setShowFromCalendar(false);
  };

  const formatDate = date => {
    if (date) {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
    return '';
  };

  const highlightStyle = {
    backgroundColor: 'green',
    color: 'white',
  };

  const dateStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
  };

  const calendarStyle = {
    width: '250px', 
    fontSize: '10px', 
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sélectionnez une période</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <style>
          {`.btn:focus,.btn:active {outline: none;box-shadow: none;}`}
        </style>
        <button className="btn" onClick={toggleFromCalendar} style={{ backgroundColor: '#973116', color: 'white' }}>Date Début</button>
        <span style={{ ...dateStyle, margin: '0 10px' }}>{formatDate(selectedFromDate)}</span>
        <button className="btn" onClick={toggleToCalendar} style={{ backgroundColor: '#973116', color: 'white' }}>Date Fin</button>
        <span style={{ ...dateStyle, margin: '0 10px' }}>{formatDate(selectedToDate)}</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          {showFromCalendar && (
            <div style={calendarStyle}>
              <h3 style={{ textAlign: 'center' }}>Du</h3>
              <Calendar
                onChange={handleFromDateChange}
                value={selectedFromDate}
              />
            </div>
          )}
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center'}}>
          {showToCalendar && (
            <div style={calendarStyle}>
              <h3 style={{ textAlign: 'center' }}>Au</h3>
              <Calendar
                onChange={handleToDateChange}
                value={selectedToDate}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateRangeSelector;
