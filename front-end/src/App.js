import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import Products from './pages/Products';
import CheckoutOrders from './pages/CustomerOrders';

function App() {
  return (
    <Routes>
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/customer/orders/:id" element={ <CheckoutOrders /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Home /> } />
    </Routes>
  );
}

export default App;
