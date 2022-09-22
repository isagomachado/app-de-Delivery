import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Checkout() {
  return (
    <Navigate to="/customer/checkout" />
  );
}
