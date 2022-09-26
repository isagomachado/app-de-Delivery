import React, { useContext } from 'react';
import NavBarAdmin from '../components/NavBarAdmin';
import NewUserFormAdmin from '../components/NewUserFormAdmin';
import DeliveryContext from '../context/DeliveryContext';

export default function AdminManage() {
  const { erroResponseAdmin } = useContext(DeliveryContext);

  return (
    <div>
      <NavBarAdmin />
      {
        erroResponseAdmin
        && (
          <p
            data-testid="admin_manage__element-invalid-register"
          >
            { erroResponseAdmin }
          </p>
        )
      }
      <NewUserFormAdmin />
    </div>
  );
}
