import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li data-testid="customer_products__element-navbar-link-products">
          Produtos
        </li>
        <li data-testid="customer_products__element-navbar-link-orders">
          Meus Pedidos
        </li>
        <li data-testid="customer_products__element-navbar-user-full-name">
          Nome do Fulano
        </li>
        <li data-testid="customer_products__element-navbar-link-logout">
          Sair
        </li>
      </ul>
    </nav>
  );
}
