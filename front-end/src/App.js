import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import CostumerProducts from './pages/CostumerProducts';

function App() {
  return (
    <Routes>
      <Route exact path="/customer/products" element={ <CostumerProducts /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Home /> } />
    </Routes>
  );
}

export default App;
