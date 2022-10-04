import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DeliveryContext from '../context/DeliveryContext';

import '../styles/CardListProducts.css';

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const { setDataLogin, setProducts } = useContext(DeliveryContext);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem('user'));
    setUser(result);
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
    <header style={ { width: '100%' } }>
      <nav>
        <ul style={ css }>
          <li>
            <Link
              to={ `/${user.role}/products` }
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </Link>
          </li>
          <li>
            <Link
              to={ `/${user.role}/orders` }
              data-testid="customer_products__element-navbar-link-orders"
            >
              Meus Pedidos
            </Link>
          </li>
          <li data-testid="customer_products__element-navbar-user-full-name">
            {user.name}
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
