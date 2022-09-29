import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSaleById, updateSaleStatus } from '../helpers/api';

export default function SellerOrdersBodyDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [prodcs, setProdcs] = useState([]);
  // const [desable, setDesable] = useState(true);
  const [desable, setDesable] = useState([true, true]);
  const REPLACE = '.';

  useEffect(() => {
    const getSaleId = async () => {
      const sale = await getSaleById(id);
      const { product: prod, ...data } = sale;
      if (data.status === 'Pendente') setDesable([false, true]);
      if (data.status === 'Preparando') setDesable([true, false]);
      setOrder(data);
      setProdcs(prod);
    };
    getSaleId();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleButtonPreparing = async () => {
    await updateSaleStatus({ status: 'Preparando' }, id);
    // console.log(retorno);

    // document.location.reload(true);
    // setDesable(false);
  };
  const handleButtonDispatch = async () => {
    await updateSaleStatus({ status: 'Em Trânsito' }, id);
    // document.location.reload(true);
    // setDesable([false, true]);
  };

  // console.log(order);
  const dTIStatus = 'seller_order_details__element-order-details-label-delivery-status';
  return (
    <div>
      <h2>Detalhe de Pedido</h2>
      <div>
        { Object.keys(order).length > 0 && (
          <>
            <div>
              Pedido:
              <span
                data-testid="seller_order_details__element-order-details-label-order-id"
              >
                {order.id}
              </span>
            </div>
            <div
              data-testid="seller_order_details__element-order-details-label-order-date"
            >
              {order.saleDate.split('T')[0].split('-').reverse().join('/')}
            </div>
            <div
              data-testid={ dTIStatus }
            >
              {order.status}
            </div>
            <button
              data-testid="seller_order_details__button-preparing-check"
              type="button"
              disabled={ desable[0] }
              onClick={ handleButtonPreparing }
            >
              Preparar Pedido
            </button>
            <button
              data-testid="seller_order_details__button-dispatch-check"
              type="button"
              disabled={ desable[1] }
              onClick={ handleButtonDispatch }
            >
              Saiu para Entrega
            </button>
          </>
        )}
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
          { prodcs.length > 0 && prodcs.map((prod, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `seller_order_details__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-name-${index}`
                }
              >
                {prod.name}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-quantity-${index}`
                }
              >
                {prod.SalesProduct.quantity}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-unit-price-${index}`
                }
              >
                {Number(prod.price).toFixed(2).replace(REPLACE, ',')}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-sub-total-${index}`
                }
              >
                {(Number(prod.price) * prod.SalesProduct.quantity)
                  .toFixed(2).replace(REPLACE, ',')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>
        Total R$:
        {' '}
        <span data-testid="seller_order_details__element-order-total-price">
          {String(order.totalPrice).replace(REPLACE, ',')}
        </span>
      </h2>
    </div>
  );
}

// PostCategory.associate = (models) => {
//   models.Category.belongsToMany(models.BlogPost, {
//     foreignKey: 'postId',
//     otherKey: 'categoryId',
//     through: models.PostCategory,
//     as: 'category',
//   });
//   models.BlogPost.belongsToMany(models.Category, {
//     foreignKey: 'categoryId',
//     otherKey: 'postId',
//     through: models.PostCategory,
//     as: 'post',
//   });
// };
