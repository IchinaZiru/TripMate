import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Navigation from './components/Navigation'
import VideoPlayer from './components/VideoPlayer'

const Home: React.FC = () => {
  return <h2>Home Page</h2>;
};

const Menu: React.FC = () => {
  return <h2>Menu Page</h2>;
};

const Locations: React.FC = () => {
  return <h2>Locations Page</h2>;
};

const Contact: React.FC = () => {
  return <h2>Contact Page</h2>;
};

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <VideoPlayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
