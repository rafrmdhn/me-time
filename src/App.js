import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';

// CEK KESEHATAN
import CekKesehatanMental from './pages/CekKesehatan';
import TestDepresi from './pages/TestDepresi';

import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App bg-stone-200">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/Home" element={<Home />} />

          <Route path="/pages/CekKesehatan" element={<CekKesehatanMental />} />
          <Route path="/pages/TestDepresi" element={<TestDepresi />} />

          <Route path="/pages/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
