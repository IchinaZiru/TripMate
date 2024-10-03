import React from 'react';
import { AnimatePresence } from 'framer-motion'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header'
import Navigation from './components/Navigation'
import VideoPlayer from './components/VideoPlayer'

import Search from './Pages/Search'
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import LoginForm from './Pages/LoginForm';

function App() {
  return (
    <AnimatePresence>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
