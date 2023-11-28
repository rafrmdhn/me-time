import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';

// CEK KESEHATAN
import CekKesehatanMental from './pages/CekKesehatan';
import TestDepresi from './pages/TestDepresi';
import TestStres from './pages/TestStres';
import TestSuicide from './pages/TestSuicide';
import TestCemas from './pages/TestCemas';
import TestPersonality from './pages/TestPersonality';
import TestBurnOut from './pages/TestBurnOut';

import ContactUs from './pages/ContactUs';

// CREDENTIALS
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App bg-stone-200">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/Home" element={<Home />} />

          <Route path="/pages/CekKesehatan" element={<CekKesehatanMental />} />
          <Route path="/pages/TestDepresi" element={<TestDepresi />} />
          <Route path="/pages/TestStres" element={<TestStres />} />
          <Route path="/pages/TestSuicide" element={<TestSuicide />} />
          <Route path="/pages/TestCemas" element={<TestCemas />} />
          <Route path="/pages/TestPersonality" element={<TestPersonality />} />
          <Route path="/pages/TestBurnOut" element={<TestBurnOut />} />

          <Route path="/pages/ContactUs" element={<ContactUs />} />


          <Route path="/admin-login" element={<Login />} />
          <Route path="/admin-register" element={<Register />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
