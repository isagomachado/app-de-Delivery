import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import DeliveryContext from './DeliveryContext';
import { getAllproducts } from '../helpers/api';

export default function DeliveryProvider({ children }) {
  const [dataRegister, setDataRegister] = useState({ name: '', email: '', password: '' });
  const [erroResponseAdmin, setErroResponseAdmin] = useState('');
  const [dataAdminRegister, setDataAdminRegister] = useState({
    name: '',
    email: '',
    password: '',
    type: 'Vendedor',
  });
  const [dataLogin, setDataLogin] = useState({ email: '', password: '' });
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await getAllproducts();
    setProducts(response);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const contextValue = useMemo(() => ({
    dataLogin,
    setDataLogin,
    products,
    setProducts,
    dataRegister,
    setDataRegister,
    dataAdminRegister,
    setDataAdminRegister,
    erroResponseAdmin,
    setErroResponseAdmin,
  }), [dataLogin, products, dataRegister, dataAdminRegister, erroResponseAdmin]);

  return (
    <DeliveryContext.Provider value={ contextValue }>
      { children }
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
