import React, { useState, useEffect } from 'react';
import { getAllSaleUser } from '../helpers/api';
import CardOrders from './CardOrders';

export default function CustomerOrdersBody() {
  const [orders, setOrders] = useState([]);
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const allSale = async () => {
      const sales = await getAllSaleUser(token);
      setOrders(sales);
    };
    allSale();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const objDataTestIds = {
    elementId: 'customer_orders__element-order-id-',
    status: 'customer_orders__element-delivery-status-',
    cardAddress: 'customer_orders__element-card-address-',
    cardPrice: 'customer_orders__element-card-price-',
    orderDate: 'customer_orders__element-order-date-',
  };
  return (
    <div>
      { orders.length > 0 && orders.map((odr) => (
        <CardOrders
          key={ odr.id }
          urlLink="/customer/orders/"
          order={ odr }
          objDataTestIds={ objDataTestIds }
        />
      ))}
    </div>
  );
}
