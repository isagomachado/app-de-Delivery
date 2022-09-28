import React, { useState, useEffect } from 'react';
import { getAllSale } from '../helpers/api';
import CardOrders from './CardOrders';

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

  const objDataTestIds = {
    elementId: 'seller_orders__element-order-id-',
    status: 'seller_orders__element-delivery-status-',
    cardAddress: 'seller_orders__element-card-address-',
    cardPrice: 'seller_orders__element-card-price-',
    orderDate: 'seller_orders__element-order-date-',
  };
  return (
    <div>
      { orders.length > 0 && orders.map((odr) => (
        <CardOrders
          key={ odr.id }
          urlLink="/seller/orders/"
          order={ odr }
          objDataTestIds={ objDataTestIds }
        />
      ))}
    </div>
  );
}
