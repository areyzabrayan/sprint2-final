import React, { useState } from "react";
import "./login.scss";
import Swal from "sweetalert2";
import { getUsers } from "../../data/data";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";


const Login = ({ signIn }) => {
  const [dataForm, handleChange, resetForm] = useForm();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(dataForm);
    const loggedUser = await getUsers(dataForm);
    if (loggedUser) {
      Swal.fire(
        "¡Excelente!",
        "Has iniciado sesión exitosamente",
        "success"
      ).then(() => {
        signIn(true); 
        navigate("/admin")
      });
    } else {
      Swal.fire(
        "¡Oops!",
        "Las credenciales ingresadas son incorrectas",
        "error"
      );
    }
    resetForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Correo electrónico:</label>
      <input
        onChange={handleChange}
        name="email"
        value={dataForm.email}
        type="text"
      />
      <label>Contraseña:</label>
      <input
        onChange={handleChange}
        name="password"
        value={dataForm.password}
        type="password"
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;