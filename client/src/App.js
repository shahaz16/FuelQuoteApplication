import './App.css';
import React from 'react'
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LOGIN from './components/Login/login';
import REGISTER from './components/Register/register'
import FuelPrice from './components/FuelPrice/fuel'
import CPM from './components/CPM/cpm'
import HISTORY from './components/FuelQuoteHistory/history'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route  path="/login" element={<LOGIN/>} />
      <Route  path="/register" element={<REGISTER/>} />
      <Route  path="/cpm" element={<CPM/>} />
      <Route  path="/fuelprice" element={<FuelPrice/>} />
      <Route  path="/history" element={<HISTORY/>} />

      </Routes>
    </Router>
    
  );
}

export default App;
