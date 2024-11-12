import React, { useState } from 'react';
import axios from 'axios';

function RecommendationForm({ onRecommendations }) {
  const [formData, setFormData] = useState({
    departure_date: '',
    arrival_date: '',
    destination: '',
    number_of_people: 1,
    budget: 0,
    preferences: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/recommendations', formData);
      onRecommendations(response.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>出発日:<input type="date" name="departure_date" onChange={handleChange} required /></label>
      <label>到着日:<input type="date" name="arrival_date" onChange={handleChange} required /></label>
      <label>旅行先:<input type="text" name="destination" onChange={handleChange} required /></label>
      <label>人数:<input type="number" name="number_of_people" onChange={handleChange} min="1" required /></label>
      <label>予算:<input type="number" name="budget" onChange={handleChange} min="0" required /></label>
      <label>希望キーワード:<input type="text" name="preferences" onChange={handleChange} /></label>
      <button type="submit">検索</button>
    </form>
  );
}

export default RecommendationForm;
