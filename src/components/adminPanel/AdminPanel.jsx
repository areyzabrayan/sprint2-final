import React, { useContext } from "react";
import { AppContext } from "../router/router";

const AdminPanel = () => {
  const { setIsLogin } = useContext(AppContext);
  return (
    <>
      <h1>Panel de administrador</h1>;
      <button onClick={() => setIsLogin(false)}>Cerrar sesion</button>;
    </>
  );
};

export default AdminPanel;
