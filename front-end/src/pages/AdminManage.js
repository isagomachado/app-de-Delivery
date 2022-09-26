import React, { useState } from 'react';
import NavBarAdmin from '../components/NavBarAdmin';
import NewUserFormAdmin from '../components/NewUserFormAdmin';

export default function AdminManage() {
  const [
    erroResponse,
    // setErroResponse,
  ] = useState('');
  return (
    <div>
      <NavBarAdmin />
      {
        erroResponse
        && (
          <p
            data-testid="admin_manage__element-invalid-register"
          >
            { erroResponse }
          </p>
        )
      }
      <NewUserFormAdmin />
    </div>
  );
}
