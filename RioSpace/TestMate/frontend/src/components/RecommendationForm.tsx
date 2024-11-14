import React, { useState } from 'react';
import { Recommendation } from '../types/Recommendation';

interface RecommendationFormProps {
  onRecommendations: (data: Recommendation[]) => void;
}

const RecommendationForm: React.FC<RecommendationFormProps> = ({ onRecommendations }) => {
  const [formData, setFormData] = useState({
    departure_date: '',
    arrival_date: '',
    destination: '',
    number_of_people: 1,
    budget: '',
    preferences: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 推薦データをonRecommendationsに渡す
    onRecommendations([formData as unknown as Recommendation]); // テスト用に型をキャスト
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        出発日:
        <input type="date" name="departure_date" value={formData.departure_date} onChange={handleChange} required />
      </label>
      <label>
        到着日:
        <input type="date" name="arrival_date" value={formData.arrival_date} onChange={handleChange} required />
      </label>
      <label>
        目的地:
        <input type="text" name="destination" value={formData.destination} onChange={handleChange} required />
      </label>
      <label>
        人数:
        <input type="number" name="number_of_people" value={formData.number_of_people} onChange={handleChange} min="1" required />
      </label>
      <label>
        予算:
        <input type="text" name="budget" value={formData.budget} onChange={handleChange} required />
      </label>
      <label>
        希望キーワード:
        <input type="text" name="preferences" value={formData.preferences} onChange={handleChange} />
      </label>
      <button type="submit">検索</button>
    </form>
  );
};

export default RecommendationForm;
