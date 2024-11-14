import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Recommendations from './components/Recommendation';
import './App.css';

const App: React.FC = () => {
  const [recommendations, setRecommendations] = useState([]);

  const handleSearch = async (searchParams: any) => {
    try {
      const response = await axios.post('/api/recommendations', searchParams);
      setRecommendations(response.data);
    } catch (error) {
      console.error('検索に失敗しました:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>観光地おすすめアプリ</h1>
      <SearchForm onSearch={handleSearch} />
      <Recommendations recommendations={recommendations} />
    </div>
  );
};

export default App;
