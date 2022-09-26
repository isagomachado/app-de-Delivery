import React from 'react';

export default function NavBarAdmin() {
  return (
    <nav>
      <a
        href="/admin/manage"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Gerenciar Usuários
      </a>

      <div>
        <p
          data-testid="customer_products__element-navbar-user-full-name"
        >
          Full Name
        </p>
        <a
          href="/"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </a>
      </div>
    </nav>
  );
}
