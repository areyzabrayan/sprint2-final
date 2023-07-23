import React from "react";

const AdminPanel = ({ signIn }) => {
  return (
    <>
      <h1>Panel de administrador</h1>;
      <button onClick={() => signIn(false)}>Cerrar sesion</button>;
    </>
  );
};

export default AdminPanel;
