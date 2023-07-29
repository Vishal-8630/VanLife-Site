import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from './pages/Vans';
import Van from './pages/Van';

import './server';

function App() {
  return (
    <div className="app__container">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/van/:id' element={<Van />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
