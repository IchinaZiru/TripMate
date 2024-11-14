import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import RecommendationForm from './components/RecommendationForm';
import Recommendations from './components/Recommendation';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  return (
    <div>
      <h1>旅行検索</h1>
      <RecommendationForm onRecommendations={setRecommendations} />
      <Recommendations recommendations={recommendations} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
