import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CekKesehatanMental from './pages/CekKesehatan';

function App() {
  return (
    <div className="App bg-stone-200">
      <Router>
        <Routes>
          <Route path="/pages/Home" element={<Home />} />
          <Route path="/pages/CekKesehatan" element={<CekKesehatanMental />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
