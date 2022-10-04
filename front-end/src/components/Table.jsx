import React from 'react';
import PropTypes from 'prop-types';

export default function Table({ cart, handleButtonRemove }) {
  const REPLACE = '.';
  return (
    <table style={ { borderCollapse: 'separate', borderSpacing: '50px 0' } }>
      <thead>
        <tr>
          <th style={ { padding: '10px 0' } }>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th style={ { padding: '0px 10px' } }>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        { cart && cart.map((prod, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-name-${index}`
              }
            >
              {prod.name}
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-quantity-${index}`
              }
            >
              {prod.qty}
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-unit-price-${index}`
              }
            >
              {Number(prod.price).toFixed(2).replace(REPLACE, ',')}
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-sub-total-${index}`
              }
            >
              {(Number(prod.price) * prod.qty).toFixed(2).replace(REPLACE, ',')}
            </td>
            <td>
              <button
                id={ prod.name }
                type="button"
                onClick={ handleButtonRemove }
                data-testid={
                  `customer_checkout__element-order-table-remove-${index}`
                }
              >
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
  })).isRequired,
  handleButtonRemove: PropTypes.func.isRequired,
};
