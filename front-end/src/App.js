import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
<<<<<<< HEAD
import Register from './pages/Register';
import CostumerProducts from './pages/CostumerProducts';
=======
import Products from './pages/Products';
>>>>>>> main-group-14-fluxo-cliente-customer-products-2

function App() {
  return (
    <Routes>
      <Route exact path="/customer/products" element={ <CostumerProducts /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
<<<<<<< HEAD
      <Route path="/" element={ <Home /> } />
=======
      <Route path="/customer/products" element={ <Products /> } />
>>>>>>> main-group-14-fluxo-cliente-customer-products-2
    </Routes>
  );
}

export default App;
