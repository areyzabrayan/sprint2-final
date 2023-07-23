import React from "react";
import "./login.scss";
import Swal from "sweetalert2";
import useForm from "../../hook/useForm";
import { getUser } from "../../../services/getUsers";

const Login = ({ signIn }) => {
  const [dataForm, handleChange, resetForm] = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(dataForm);
    const loggedUser = await getUser(dataForm);
    if (loggedUser) {
      Swal.fire(
        `Exelente ${loggedUser.email}`,
        "Has iniciado sesión exitosamente",
        "success"
      ).then(() => {
        signIn(true);
      });
    } else {
      Swal.fire(
        "Ooops!",
        "las credenciales ingresadas son incorrectas",
        "error"
      );
    }
    console.log(loggedUser);
    resetForm();
  };

  return (
    <>
      <div className="container__login">
        <form onSubmit={handleSubmit}>
          <label>Correo electrónico:</label>
          <input
            onChange={handleChange}
            name="email"
            value={dataForm?.email || ""}
            type="text"
          />
          <label>Contraseña:</label>
          <input
            onChange={handleChange}
            name="password"
            value={dataForm?.password || ""}
            type="password"
          />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </>
  );
};

export default Login;
