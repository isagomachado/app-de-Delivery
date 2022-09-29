import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CardOrders({ urlLink, order, objDataTestIds }) {
  return (
    <Link
      to={ `${urlLink}${order.id}` }
    >
      <div>
        Pedido:
        {' '}
        <div
          data-testid={ `${objDataTestIds.elementId}${order.id}` }
        >
          {order.id}
        </div>
      </div>
      <div data-testid={ `${objDataTestIds.status}${order.id}` }>
        {order.status}
      </div>
      <div data-testid={ `${objDataTestIds.cardAddress}${order.id}` }>
        {`${order.deliveryAddress}, ${order.deliveryNumber}`}
      </div>
      <div data-testid={ `${objDataTestIds.cardPrice}${order.id}` }>
        {order.totalPrice}
      </div>
      <div data-testid={ `${objDataTestIds.orderDate}${order.id}` }>
        {order.saleDate}
      </div>
    </Link>
  );
}

CardOrders.propTypes = {
  urlLink: PropTypes.string.isRequired,
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
  }).isRequired,
  objDataTestIds: PropTypes.shape({
    elementId: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    cardAddress: PropTypes.string.isRequired,
    cardPrice: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
  }).isRequired,
};
