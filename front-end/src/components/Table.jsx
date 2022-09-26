import React from 'react';

const handleButtonRemove = ({ target }) => {
  const { id } = target;
  const newProdutos = products.filter((prod) => prod.id !== Number(id));
  setProducts(newProdutos);
  console.log(vendedor);
};

export default function Table() {
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
  </table>;
}
