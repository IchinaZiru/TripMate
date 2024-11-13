import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header'
import Navigation from './components/Navigation'
import VideoPlayer from './components/VideoPlayer'

import Search from './pages/Search'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import Testdb from './pages/Testbd';

//Rio
/*
import Header from './components/Rio/Header';
import Slideshow from './components/Rio/Slideshow';
import Main from './components/Rio/Main';
import Modal from './components/Rio/Modal';
import Footer from './components/Rio/Footer';
*/


function App() {

  /*
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  */

  return (

    /*          -------Rio Front Source Code------
    <div className="App">
      <Header />
      <Slideshow />
      <Main openModal={openModal} />
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      <Footer />
    </div>
    */


    <AnimatePresence>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/testdb" element={<Testdb />} />
      </Routes>
    </AnimatePresence>
  //test

  );
}

export default App;
