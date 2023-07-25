import React, { useContext } from "react";
import "./login.scss";
import Swal from "sweetalert2";
import useForm from "../../hook/useForm";
import { getUser } from "../../../services/getUsers";
import close from "../../../assets/close.svg";
import { AppContext } from "../../router/router";

const Login = () => {
  const { setIsLogin, show, setShow } = useContext(AppContext);

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
        setIsLogin(true);
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
      <div className={`container__login ${show ? "show" : ""}`}>
        <form onSubmit={handleSubmit}>
          <figure className="container__close" onClick={() => setShow(false)}>
            <img src={close} alt="" />
          </figure>
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
