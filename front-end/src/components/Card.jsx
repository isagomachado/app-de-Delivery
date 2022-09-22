import React, { useContext } from 'react';
import DeliveryContext from '../context/DeliveryContext';

export default function Card() {
  const { products } = useContext(DeliveryContext);
  const style = {
    border: '2px solid white',
  };

  return (
    <>
      <div style={ { display: 'flex' } }>
        {products
          && products.map((prod) => (
            <div
              key={ prod.id }
              style={ style }
            >
              <img
                src={ prod.urlImage }
                alt={ prod.name }
                data-testid={ `customer_products__img-card-bg-image-${prod.id}` }
              />
              <p data-testid={ `customer_products__element-card-title-${prod.id}` }>
                {prod.name}
              </p>
              <p data-testid={ `customer_products__element-card-price-${prod.id}` }>
                {prod.price}
              </p>
              <button
                data-testid={ `customer_products__button-card-rm-item-${prod.id}` }
                type="button"
              >
                -
              </button>
              <input
                disabled
                data-testid={ `customer_products__input-card-quantity-${prod.id}` }
                placeholder="0"
              />
              <button
                data-testid={ `customer_products__button-card-add-item-${prod.id}` }
                type="button"
              >
                +
              </button>
            </div>
          ))}
      </div>
      <button
        data-testid="customer_products__checkout-bottom-value"
        type="button"
        name="total-price"
      >
        Ver Carrinho:
        {' '}
        <span placeholder="0">Inserir Total Dinâmico</span>
      </button>
    </>
  );
}
