// SearchForm.js
import React, { useState } from 'react';
import '../styles/SearchForm.css';

const SearchForm = ({ onSearch }) => {
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [destination, setDestination] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [budget, setBudget] = useState('');
  const [preferences, setPreferences] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      departure_date: departureDate,
      arrival_date: arrivalDate,
      destination,
      number_of_people: numberOfPeople,
      budget,
      preferences,
    });
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>出発日:</label>
        <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>到着日:</label>
        <input type="date" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>目的地:</label>
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="例: 福島県" required />
      </div>
      <div className="form-group">
        <label>人数:</label>
        <input type="number" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} min="1" required />
      </div>
      <div className="form-group">
        <label>予算:</label>
        <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="例: 5000" required />
      </div>
      <div className="form-group">
        <label>好み・キーワード:</label>
        <input type="text" value={preferences} onChange={(e) => setPreferences(e.target.value)} placeholder="例: 温泉、紅葉" />
      </div>
      <button type="submit" className="search-button">検索</button>
    </form>
  );
};

export default SearchForm;
