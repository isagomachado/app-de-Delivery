import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSalesById } from '../helpers/api';

export default function TableOrderDetails() {
  const testId = {
    sellerName: 'customer_order_details__element-order-details-label-seller-name',
    date: 'customer_order_details__element-order-details-label-order-date',
    status: 'customer_order_details__element-order-details-label-delivery-status',
  };

  const { id } = useParams();
  const [sale, setSale] = useState({});
  const [products, setProducts] = useState({});
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    const getOrder = async () => {
      const response = await getSalesById(+id);
      if (response.message) {
        setMessageError(response.message);
      } else {
        setSale(response.sale);
        setProducts(response.products);
      }
    };
    getOrder();
  }, [id]);

  return (
    <main>
      {
        messageError ? (
          <h1>{ messageError }</h1>
        ) : (
          <>
            <div style={ { display: 'flex', gap: '10px' } }>
              <h2
                data-testid="customer_order_details__element-order-details-label-order-id"
              >
                {`PEDIDO ${sale.id}`}
              </h2>
              <h2
                data-testid={ testId.sellerName }
              >
                {`P. VEND: ${sale.user?.name}`}
              </h2>
              <h2
                data-testid={ testId.date }
              >
                {new Date(sale.saleDate).toLocaleString('pt-BR')}
              </h2>
              <h2
                data-testid={ testId.status }
              >
                {sale.status}
              </h2>
              <button
                data-testid="customer_order_details__button-delivery-check"
                type="button"
              >
                MARCAR COMO ENTREGUE

              </button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Descrição</th>
                  <th>Quantidade</th>
                  <th>Valor Unitário</th>
                  <th>Sub-total</th>
                </tr>
              </thead>
              <tbody>
                { products.length > 0
                  && products.map((prod, ind) => (
                    <tr key={ ind }>
                      <td
                        data-testid={
                          `customer_order_details__element-order-table-item-number-${ind}`
                        }
                      >
                        {ind}
                      </td>
                      <td
                        data-testid={
                          `customer_order_details__element-order-table-name-${ind}`
                        }
                      >
                        {prod.name}
                      </td>
                      <td
                        data-testid={
                          `customer_order_details__element-order-table-quantity-${ind}`
                        }
                      >
                        {prod.quantity}
                      </td>
                      <td
                        data-testid={
                          `customer_order_details__element-order-table-unit-price-${ind}`
                        }
                      >
                        {
                          Number(prod.price).toLocaleString(
                            'pt-BR',
                            { style: 'currency', currency: 'BRL' },
                          )
                        }

                      </td>
                      <td
                        data-testid={
                          `customer_order_details__element-order-table-sub-total-${ind}`
                        }
                      >
                        {Number(prod.price * prod.quantity)
                          .toLocaleString(
                            'pt-BR',
                            { style: 'currency', currency: 'BRL' },
                          )}

                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <h1
              data-testid="customer_order_details__element-order-total-price"
            >
              {Number(sale.totalPrice)
                .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </h1>
          </>
        )
      }
    </main>
  );
}
