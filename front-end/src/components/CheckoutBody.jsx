/* eslint-disable react/jsx-max-depth */
import React, { useState, useEffect } from 'react';
import { getSallers } from '../helpers/api';

const usuario = { id: 999999 };
const produtos = [
  {
    id: 1,
    name: 'Skol Lata 250ml',
    price: 2.2,
    url_image: 'http://localhost:3001/images/skol_lata_350ml.jpg',
    quantidade: 2,
  },
  {
    id: 2,
    name: 'Heineken 600ml',
    price: 7.5,
    url_image: 'http://localhost:3001/images/heineken_600ml.jpg',
    quantidade: 2,
  },
  {
    id: 3,
    name: 'Antarctica Pilsen 300ml',
    price: 2.49,
    url_image: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
    quantidade: 2,
  },
  {
    id: 4,
    name: 'Brahma 600ml',
    price: 7.5,
    url_image: 'http://localhost:3001/images/brahma_600ml.jpg',
    quantidade: 2,
  }];

export default function CheckoutBody() {
  const [products, setProducts] = useState([]);
  const [addresUser, setAddress] = useState({ addres: '', addresNumber: '' });
  const [vendedor, setVendedor] = useState({ all: [], select: '' });

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
    const newProdutos = products.filter((prod) => prod.id !== Number(id));
    setProducts(newProdutos);
    console.log(vendedor);
  };

  const handleAddress = ({ target }) => {
    const { value, name } = target;
    setAddress({ ...addresUser, [name]: value });
  };

  const handleTotal = () => {
    let total;
    if (products.length !== 0) {
      total = products
        .map((prod) => prod.price * prod.quantidade)
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
      totalPrice: total,
      deliveryAddress: addresUser.addres,
      deliveryNumber: addresUser.addresNumber,
      saleDate: new Date(),
      status: true,
    };
    console.log(objSale);
    // const sale = await registerSales(objSale);
    // await registerSalesProducts({ saleid: sale });
  };

  return (
    <div>
      <section>
        <h1>Finalizar pedido</h1>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-total</th>
              <th>Remover Item</th>
            </tr>
          </thead>
          <tbody>
            { products && products.map((prod, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-<${index}>`
                  }
                >
                  {prod.id}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-<${index}>`
                  }
                >
                  {prod.name}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-<${index}>`
                  }
                >
                  {prod.quantidade}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-<${index}>`
                  }
                >
                  {prod.price.toFixed(2)}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-<${index}>`
                  }
                >
                  {(prod.price * prod.quantidade).toFixed(2)}
                </td>
                <td>
                  <button
                    id={ prod.id }
                    type="button"
                    onClick={ handleButtonRemove }
                    data-testid={
                      `customer_checkout__element-order-table-remove-<${index}>`
                    }
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1
          data-testid="customer_checkout__element-order-total-price"
        >
          Total: R$
          {' '}
          { handleTotal() }
        </h1>
      </section>
      <section>
        Detalhes e Endereço para Entrega
        <p>P. Vendedora Responsável:</p>
        <select>
          { vendedor.all.length !== 0 && vendedor.all.map((vend, index) => (
            <option
              key={ index }
              data-testid="customer_checkout__select-seller"
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
          data-testid="customer_checkout__input-addressNumber"
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
