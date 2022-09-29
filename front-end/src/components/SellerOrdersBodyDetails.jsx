import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSaleById } from '../helpers/api';

export default function SellerOrdersBodyDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const getSaleId = async () => {
      const sale = await getSaleById(id);
      console.log(sale.id);
      setOrder(sale);
    };
    getSaleId();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(order);
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
              {order.saleDate}
            </div>
            <div
              data-testid={ `seller_order_details__
              element-order-details-label-delivery-status` }
            >
              {order.status}
            </div>
            <button
              data-testid="seller_order_details__button-preparing-check"
              type="button"
            >
              Preparar Pedido
            </button>
            <button
              data-testid="seller_order_details__button-dispatch-check"
              type="button"
            >
              Saiu para Entrega
            </button>
          </>
        )}
      </div>
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
