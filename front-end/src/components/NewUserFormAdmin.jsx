import React from 'react';

export default function NewUserFormAdmin() {
  return (
    <div>
      <h1>Cadastrar novo usuário</h1>
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            placeholder="Nome e sobrenome"
            type="name"
            name="name"
            id="name-input"
            data-testid="admin_manage__input-name"
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="email-input">
          Email
          <input
            placeholder="seu-email@site.com.br"
            type="email"
            name="email"
            id="email-input"
            data-testid="admin_manage__input-email"
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="password-input">
          Senha
          <input
            placeholder="*********"
            type="password"
            name="password"
            id="password-input"
            data-testid="admin_manage__input-password"
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="type-select">
          Tipo
          <select name="type-select" id="type-select">
            <option value="Vendedor">Vendedor</option>
            <option value="Cliente">Cliente</option>
          </select>
        </label>

        <button
          type="button"
          data-testid="admin_manage__button-register"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}