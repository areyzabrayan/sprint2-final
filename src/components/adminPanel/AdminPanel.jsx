import React from "react";

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
