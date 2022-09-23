import React, { useContext } from 'react';
import DeliveryContext from '../context/DeliveryContext';

export default function Card() {
  const REPLACE = '.';
  const { products } = useContext(DeliveryContext);
  const style = {
    border: '2px solid white',
  };

  return (
    <>
      <main style={ { display: 'flex' } }>
        {products
          && products.map((prod) => (
            <div
              key={ prod.id }
              style={ style }
            >
              <div>
                <img
                  src={ prod.urlImage }
                  alt={ prod.name }
                  data-testid={ `customer_products__img-card-bg-image-${prod.id}` }
                  width="100px"
                  height="100px"
                />
              </div>
              <p data-testid={ `customer_products__element-card-title-${prod.id}` }>
                {prod.name}
              </p>
              <p data-testid={ `customer_products__element-card-price-${prod.id}` }>
                {prod.price.replace(REPLACE, ',')}
              </p>
              <button
                data-testid={ `customer_products__button-card-rm-item-${prod.id}` }
                type="button"
              >
                -
              </button>
              <input
                value="0"
                id="quantity"
                type="text"
                data-testid={ `customer_products__input-card-quantity-${prod.id}` }
              />
              <button
                data-testid={ `customer_products__button-card-add-item-${prod.id}` }
                type="button"
              >
                +
              </button>
            </div>
          ))}
      </main>
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
