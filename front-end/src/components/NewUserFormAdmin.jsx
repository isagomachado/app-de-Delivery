import React, { useContext } from 'react';
import DeliveryContext from '../context/DeliveryContext';

export default function NewUserFormAdmin() {
  const {
    dataAdminRegister,
    setDataAdminRegister,
    setErroResponseAdmin,
  } = useContext(DeliveryContext);

  const regex = /\S+@\S+\.\S+/;
  const numberTwelve = 12;
  const numberSix = 6;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setDataAdminRegister({ ...dataAdminRegister, [name]: value });

    if (name === 'name' && value.length < numberTwelve) {
      setErroResponseAdmin('Seu nome completo deve ter mais que 12 caracteres');
    } else if (name === 'name' && value.length >= numberTwelve) {
      setErroResponseAdmin('');
    } else if (name === 'email' && !regex.test(value)) {
      setErroResponseAdmin('Email invalido');
    } else if (name === 'email' && regex.test(value)) {
      setErroResponseAdmin('');
    } else if (name === 'password' && value.length < numberSix) {
      setErroResponseAdmin('Password deve ter mais que 6 caracteres');
    } else if (name === 'password' && value.length >= numberSix) {
      setErroResponseAdmin('');
    }
  };

  const checkName = () => dataAdminRegister.name.length >= numberTwelve;
  const checkPassword = () => dataAdminRegister.password.length >= numberSix;
  const checkEmail = () => regex.test(dataAdminRegister.email);

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
          <select
            name="type"
            id="type-select"
            data-testid="admin_manage__select-role"
          >
            <option value="Vendedor" selected>Vendedor</option>
            <option value="Cliente">Cliente</option>
          </select>
        </label>

        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ !(checkEmail() && checkName() && checkPassword()) }
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
