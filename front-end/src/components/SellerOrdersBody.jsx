import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { getAllSale } from '../helpers/api';
// import {  } from 'react';
// import  from 'react';

export default function SellerOrdersBody() {
  const [orders, setOrders] = useState([]);
  // const navegate = useNavigate();

  useEffect(() => {
    const allSale = async () => {
      const sales = await getAllSale();
      setOrders(sales);
    };
    allSale();
  }, []);

  // const handleClickcard = () => {
  //   console.log('asdasd');
  // };

  return (
    <div>
      { orders.length > 0 && orders.map((order, index) => (
        <div
          key={ index }
        >
          <div>
            Pedido:
            {' '}
            <Link
              to={ `/seller/orders/${order.id}` }
              data-testid={ `seller_orders__element-order-id-${order.id}` }
            >
              {order.id}
            </Link>
          </div>
          <div data-testid={ `seller_orders__element-delivery-status-${order.id}` }>
            {order.status}
          </div>
          <div data-testid={ `seller_orders__element-card-address-${order.id}` }>
            {`${order.deliveryAddress}, ${order.deliveryNumber}`}
          </div>
          <div data-testid={ `seller_orders__element-card-price-${order.id}` }>
            {order.totalPrice}
          </div>
          <div data-testid={ `seller_orders__element-order-date-${order.id}` }>
            {order.saleDate}
          </div>
        </div>
      ))}
    </div>
  );
}
