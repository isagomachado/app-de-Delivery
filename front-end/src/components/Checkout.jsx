import React, { useContext } from 'react';
import DeliveryContext from '../context/DeliveryContext';
// import DeliveryProvider from '../context/DeliveryProvider';

// const vendedor = [];
// const [produto, setProduto] = useState([]); // Provider

export default function Checkout() {
  const { vendedor } = useContext(DeliveryContext);
  const { produtos, setProdutos } = useContext(DeliveryContext);

  const handleButtonRemove = ({ target }) => {
    const { id } = target;
    const newProdutos = produto.filter((prod) => prod.id !== id);
    setProdutos(newProdutos);
  };

  return (
    <div>
      <section>
        Finalizar pedido
        <table>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
          { !produtos && produtos.map((prod, index) => (
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
                {prod.descricao}
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
                {prod.valorUni}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-<${index}>`
                }
              >
                {prod.subTotal}
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
        </table>
        <h1
          data-testid="customer_checkout__element-order-total-price"
        >
          Total: R$ 0
        </h1>
      </section>
      <section>
        Detalhes e Endereço para Entrega
        <p>P. Vendedora Responsável:</p>
        <select>
          { vendedor && vendedor.map((vend, index) => (
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
        <input type="text" data-testid="customer_checkout__input-address" />
        <p>Número</p>
        <input data-testid="customer_checkout__input-addressNumber" type="number" />
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
        >
          Finalizar Pedido
        </button>
      </section>
    </div>
  );
}
