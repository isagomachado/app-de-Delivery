import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DeliveryContext from '../context/DeliveryContext';

export default function Card() {
  const REPLACE = '.';
  const navigate = useNavigate();

  const { products } = useContext(DeliveryContext);
  const [quantity, setQuantity] = useState({});
  const [valueTotal, setValueTotal] = useState(0);
  const [cart, setCart] = useState([]);

  const addCart = (name, price, qty, id) => {
    const findProd = cart.filter((prod) => prod.name !== name);

    const save = {
      id,
      name,
      qty,
      price,
    };

    findProd.push(save);

    setCart(findProd);
  };

  const sumTotal = async (price) => {
    const priceProd = parseFloat(price);
    const calcTotal = valueTotal + priceProd;
    setValueTotal(calcTotal);
  };

  const subTotal = (price) => {
    const priceProd = parseFloat(price);
    const calcTotal = valueTotal - priceProd;
    setValueTotal(calcTotal);
  };

  const calcInput = async (qty, name, price) => {
    setQuantity({ ...quantity, [name]: qty, [price]: price });

    const calcProd = qty * price;
    const calcTotal = valueTotal + calcProd;

    setValueTotal(calcTotal);
  };

  const inputQuantity = ({ target }) => {
    const { value, name, id, className } = target;
    const priceNumber = parseFloat(className);
    const qtyNumber = parseFloat(value);
    const prodId = parseFloat(id);

    addCart(name, priceNumber, qtyNumber, prodId);
    setQuantity({ ...quantity, [name]: qtyNumber });
    calcInput(qtyNumber, name, priceNumber);
  };

  const incrementeQuantity = ({ target }) => {
    const { name, value, id } = target;
    const sum = typeof quantity[name] !== 'number' ? 0 : quantity[name];
    const qty = sum + 1;

    setQuantity({ ...quantity, [name]: qty });
    addCart(name, value, qty, +id);
    sumTotal(value);
  };

  const decrementeQuantity = ({ target }) => {
    const { name, value, id } = target;
    if (quantity[name] === 0 || quantity[name] === undefined) {
      setQuantity({ ...quantity, [name]: 0 });
    } else {
      const qty = quantity[name] - 1;
      setQuantity({ ...quantity, [name]: quantity[name] - 1 });
      addCart(name, value, qty, +id);

      subTotal(value);
    }
  };

  const checkOut = () => {
    navigate('/customer/checkout');
  };

  useEffect(() => {
    const saveStorage = () => {
      localStorage.setItem('cart', JSON.stringify(cart));
    };
    saveStorage();
  }, [cart]);

  return (
    <>
      <main style={ { display: 'flex' } }>
        {products
          && products.map((prod) => (
            <div
              key={ prod.id }
              style={ { border: '2px solid white' } }
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
              <label htmlFor={ `quantity-${prod.id}` }>
                <button
                  data-testid={ `customer_products__button-card-rm-item-${prod.id}` }
                  type="button"
                  name={ prod.name }
                  id={ prod.id }
                  value={ prod.price }
                  onClick={ (e) => decrementeQuantity(e) }
                >
                  -
                </button>
                <input
                  value={ quantity[prod.name] || 0 }
                  name={ prod.name }
                  min="0"
                  onChange={ (e) => inputQuantity(e) }
                  id={ prod.id }
                  className={ prod.price }
                  type="number"
                  data-testid={ `customer_products__input-card-quantity-${prod.id}` }
                />
                <button
                  data-testid={ `customer_products__button-card-add-item-${prod.id}` }
                  type="button"
                  name={ prod.name }
                  id={ prod.id }
                  value={ prod.price }
                  onClick={ (e) => incrementeQuantity(e) }
                >
                  +
                </button>
              </label>
            </div>
          ))}
      </main>
      <button
        data-testid="customer_products__button-cart"
        type="button"
        disabled={ valueTotal < 1 }
        onClick={ checkOut }
        name="total-price"
        id="total-price"
      >
        Ver carrinho:
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {valueTotal.toFixed(2).replace(REPLACE, ',')}
        </span>
      </button>
    </>
  );
}
