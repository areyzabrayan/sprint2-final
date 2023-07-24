import React from "react";
import "./login.scss";
import Swal from "sweetalert2";
import useForm from "../../hook/useForm";
import { getUser } from "../../../services/getUsers";
import close from '../../../assets/close.svg'

const Login = ({ signIn, showV, show}) => {
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
      <div className={`container__login ${showV? 'show' : ""}` }>
        <form onSubmit={handleSubmit}>
          <figure className="container__close" onClick={()=>show(false)} >
            <img src={close} alt="" />
          </figure>
          <h1>Bienvenido</h1>
          <p>Inicia Sesion</p>
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
