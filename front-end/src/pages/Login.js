import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) navigate('/customer/products');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <LoginForm />
  );
}
