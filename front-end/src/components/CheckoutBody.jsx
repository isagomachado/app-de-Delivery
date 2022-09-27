/* eslint-disable react/jsx-max-depth */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSallers, registerSales } from '../helpers/api';
import Table from './Table';

const usuario = { id: 3 };

export default function CheckoutBody() {
  const produtos = JSON.parse(localStorage.getItem('cart'));
  const [products, setProducts] = useState([]);
  const [addresUser, setAddress] = useState({ addres: '', addresNumber: '' });
  const [vendedor, setVendedor] = useState({ all: [], select: '' });
  const navegate = useNavigate();
  const REPLACE = '.';

  useEffect(() => {
    const vendedores = async () => {
      const seller = await getSallers();
      setVendedor({ all: seller, select: seller[0].id });
    };
    vendedores();
    setProducts(produtos);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleButtonRemove = ({ target }) => {
    const { id } = target;
    const newProdutos = products.filter((prod) => prod.name !== id);
    console.log(newProdutos);
    setProducts(newProdutos);
  };

  const handleAddress = ({ target }) => {
    const { value, name } = target;
    setAddress({ ...addresUser, [name]: value });
  };

  const handleTotal = () => {
    let total;
    if (products.length !== 0) {
      total = products
        .map((prod) => prod.price * prod.qty)
        .reduce((acc, number) => acc + number);
    } else {
      total = 0;
    }
    return parseFloat(total).toFixed(2);
  };

  const handleButtonSubmitOrder = async () => {
    const total = handleTotal();
    const objSale = {
      userId: usuario.id,
      sellerId: vendedor.select,
      totalPrice: Number(total),
      deliveryAddress: addresUser.addres,
      deliveryNumber: addresUser.addresNumber,
      saleDate: new Date(),
      status: 'Pendente',
    };
    console.log({ objSale, products });
    // const saleId = '22222222';
    const saleId = await registerSales({ objSale, products });
    // await registerSalesProducts({ saleId, products });
    navegate(`/customer/orders/${saleId}`);
  };

  return (
    <div>
      <section>
        <h1>Finalizar pedido</h1>
        <Table
          products={ products }
          handleButtonRemove={ handleButtonRemove }
        />
        <h1>
          Total: R$
          {' '}
          <span
            data-testid="customer_checkout__element-order-total-price"
          >
            { handleTotal().replace(REPLACE, ',') }
          </span>
        </h1>
      </section>
      <section>
        Detalhes e Endereço para Entrega
        <p>P. Vendedora Responsável:</p>
        <select
          data-testid="customer_checkout__select-seller"
        >
          { vendedor.all.length !== 0 && vendedor.all.map((vend, index) => (
            <option
              key={ index }
              value={ vend.name }
            >
              { vend.name }
            </option>
          ))}
        </select>
        <p>Endereço</p>
        <input
          type="text"
          name="addres"
          data-testid="customer_checkout__input-address"
          onChange={ handleAddress }
        />
        <p>Número</p>
        <input
          data-testid="customer_checkout__input-address-number"
          type="number"
          name="addresNumber"
          onChange={ handleAddress }
        />
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
          onClick={ handleButtonSubmitOrder }
        >
          Finalizar Pedido
        </button>
      </section>
    </div>
  );
}
