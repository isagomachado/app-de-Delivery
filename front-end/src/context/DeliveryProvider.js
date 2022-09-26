import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import DeliveryContext from './DeliveryContext';

export default function DeliveryProvider({ children }) {
  const [dataLogin, setDataLogin] = useState({ email: '', password: '' });
  const [dataRegister, setDataRegister] = useState({ name: '', email: '', password: '' });
  const [erroResponseAdmin, setErroResponseAdmin] = useState('');
  const [dataAdminRegister, setDataAdminRegister] = useState({
    name: '',
    email: '',
    password: '',
    type: 'Vendedor',
  });

  const contextValue = useMemo(() => ({
    dataLogin,
    setDataLogin,
    dataRegister,
    setDataRegister,
    dataAdminRegister,
    setDataAdminRegister,
    erroResponseAdmin,
    setErroResponseAdmin,
  }), [dataLogin, dataRegister, dataAdminRegister, erroResponseAdmin]);

  return (
    <DeliveryContext.Provider value={ contextValue }>
      { children }
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
