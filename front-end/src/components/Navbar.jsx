import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DeliveryContext from '../context/DeliveryContext';

import '../styles/CardListProducts.css';

export default function Navbar() {
  const navigate = useNavigate();
  const [nameUser, setNameUser] = useState('');
  const { setDataLogin, setProducts } = useContext(DeliveryContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setNameUser(user.name);
  }, []);

  const removeDataUserContext = () => {
    const dataInitial = { name: '', password: '' };
    setDataLogin(dataInitial);
    setProducts([]);
  };

  const redirectHome = () => {
    navigate('/');
  };

  const logOut = () => {
    removeDataUserContext();
    redirectHome();
    localStorage.removeItem('user');
  };

  const css = { listStyleType: 'none', display: 'flex', width: '100vw' };

  return (
    <header style={ { width: "100%" }}>
      <nav>
        <ul style={ css }>
          <li data-testid="customer_products__element-navbar-link-products">
            Produtos
          </li>
          <li data-testid="customer_products__element-navbar-link-orders">
            Meus Pedidos
          </li>
          <li data-testid="customer_products__element-navbar-user-full-name">
            {nameUser}
          </li>
          <li>
            <button
              data-testid="customer_products__element-navbar-link-logout"
              type="button"
              onClick={ logOut }
            >
              Sair
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
