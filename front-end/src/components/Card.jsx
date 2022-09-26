import React, { useContext, useState, useEffect } from 'react';
import DeliveryContext from '../context/DeliveryContext';

const MIN_VALUE = -1;
const CART = 'cart';
const REPLACE = ".";

export default function Card() {

  const { products } = useContext(DeliveryContext);

  const [quantity, setQuantity] = useState(0);
  const [valueTotal, setValueTotal] = useState(0);
  // const [storage, setStorage] = useState([]);

  const sumTotal = (target) => {
   const total = target.id * quantity;
    setValueTotal(Number(total).toFixed(2));
  };

  // const subTotal = (price) => {
  //   const priceProd = parseFloat(price);
  //   const calcTotal = valueTotal - priceProd;
  //   setValueTotal(calcTotal);
  // };

  // em andamento
  // const sumTotalInput = async (qty, name, price) => {
  //   console.log(quantity[name]);
  //   console.log(price);
  // const sum = typeof quantity[name] !== 'number' ? 0 : quantity[name];

  // setQuantity([...quantity, { [name]: sum + +qty, price }]);

  // const priceProd = parseFloat(price);
  // const calcTotal = valueTotal + priceProd;

  // setValueTotal(calcTotal);
  // };

  const inputQuantity = ({ target }) => {
    const { value, name } = target;
    setQuantity((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    sumTotal(target);
  };

  const incrementeQuantity = ({ target }) => {
    const { name } = target;
    setQuantity((prevState) => ({
      ...prevState,
      [name]: prevState[name] ? prevState[name] + 1 : 1,
    }));
    sumTotal(target);
    // const { name, value } = target;
    // const sum = typeof quantity[name] !== 'number' ? 0 : quantity[name];

    // testando outras possibilidades
    // const prodItem = {
    //   nome: name,
    //   qty: sum + 1,
    //   moeda: value,
    // };

    // const b = prodItem.qty;
    // const c = prodItem.moeda;

    // console.log(prodItem.moeda);
    // setStorage([...storage, { name, qty: b, price: c }]);

    // setQuantity({ ...quantity, [name]: sum + 1 });
    // sumTotal(value);
  };

  const decrementeQuantity = ({ target }) => {
    const { name } = target;
    setQuantity((prevState) => ({
      ...prevState,
      [name]: prevState[name] ? prevState[name] - 1 : MIN_VALUE,
    }));
    sumTotal(target);
    // const { name, value } = target;

    // if (quantity[name] === 0 || quantity[name] === undefined) {
    //   setQuantity({ ...quantity, [name]: 0 });
    // } else {
    //   setQuantity({ ...quantity, [name]: quantity[name] - 1 });
    //   subTotal(value);
    // }
  };

  const saveStorage = () => {
    // essa condição serve para evitar retorno null na primeira chamada do localStorage(quando ele está vazio).
    if (!JSON.parse(localStorage.getItem(CART))) {
      localStorage.setItem(CART, JSON.stringify([]));
    }
    // salva os dados do carrinho no localStorage
      localStorage.setItem(CART, JSON.stringify(valueTotal));
    // const obj = [];
    // setStorage([...storage, obj]);
    // console.log(storage);
    // console.log(storage);
    // console.log(obj);
    // if (storage) localStorage.setItem('cart', JSON.stringify(storage));
  };


  // atualiza o storage conforme o valor do carrinho muda
  useEffect(() => {
    saveStorage();
  }, [valueTotal]);

  return (
    <>
      <main style={{ display: "flex" }}>
        {products &&
          products.map((prod, index) => (
            <div key={prod.id} style={{ border: "2px solid white" }}>
              <div>
                <img
                  src={prod.urlImage}
                  alt={prod.name}
                  data-testid={`customer_products__img-card-bg-image-${prod.id}`}
                  width="100px"
                  height="100px"
                />
              </div>
              <p
                data-testid={`customer_products__element-card-title-${prod.id}`}
              >
                {prod.name}
              </p>
              <p
                data-testid={`customer_products__element-card-price-${prod.id}`}
              >
                {prod.price.replace(REPLACE, ",")}
              </p>
              <button
                id={prod.price}
                data-testid={`customer_products__button-card-rm-item-${prod.id}`}
                type="button"
                name={`quantity${index}`}
                onClick={(e) => decrementeQuantity(e)}
              >
                -
              </button>
              <input
                id={prod.price}
                value={quantity[`quantity${index}`] || 0}
                name={`quantity${index}`}
                // min="0"
                onChange={(e) => inputQuantity(e)}
                type="text"
                data-testid={`customer_products__input-card-quantity-${prod.id}`}
              />
              <button
                id={prod.price}
                data-testid={`customer_products__button-card-add-item-${prod.id}`}
                type="button"
                name={`quantity${index}`}
                // value={prod.price}
                onClick={(e) => incrementeQuantity(e)}
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
        id="total-price"
      >
        {valueTotal.toFixed(2).replace(REPLACE, ",")}
      </button>
    </>
  );
}
