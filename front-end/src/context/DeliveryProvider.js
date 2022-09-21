import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import DeliveryContext from './DeliveryContext';

export default function DeliveryProvider({ children }) {
  const [dataLogin, setDataLogin] = useState({ email: '', password: '' });

  const contextValue = useMemo(() => ({
    dataLogin, setDataLogin,
  }), [dataLogin]);

  return (
    <DeliveryContext.Provider value={ contextValue }>
      { children }
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
