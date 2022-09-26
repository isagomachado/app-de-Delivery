import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CostumerProducts from './pages/CostumerProducts';
import AdminManage from './pages/AdminManage';

function App() {
  return (
    <Routes>
      <Route exact path="/admin/manage" element={ <AdminManage /> } />
      <Route exact path="/customer/products" element={ <CostumerProducts /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Home /> } />
    </Routes>
  );
}

export default App;
