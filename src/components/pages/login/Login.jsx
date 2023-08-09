import React, { useContext } from "react";
import "./login.scss";
import Swal from "sweetalert2";
import useForm from "../../hook/useForm";
import { getUser } from "../../../services/getUsers";
import close from "../../../assets/close.svg";
import { AppContext } from "../../router/router";
import { useEffect } from "react";

const Login = () => {
  const { setIsLogin, show, setShow, setLoginImg, setLoginName } =
    useContext(AppContext);

  const [dataForm, handleChange, resetForm] = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loggedUser = await getUser(dataForm);
    if (loggedUser) {
      Swal.fire(
        `Exelente ${loggedUser.name}`,
        "Has iniciado sesión exitosamente",
        "success"
      ).then(() => {
        console.log("Setting login image:", loggedUser.img);
        setIsLogin(true);
        setLoginImg(loggedUser.img);
        setLoginName(loggedUser.name);
      });
    } else {
      Swal.fire(
        "Ooops!",
        "las credenciales ingresadas son incorrectas",
        "error"
      );
    }

    sessionStorage.setItem("user", JSON.stringify(loggedUser));
    resetForm();
  };

  return (
    <>
      <div className={`container__login ${show ? "show" : ""}`}>
        <form onSubmit={handleSubmit}>
          <figure className="container__close" onClick={() => setShow(false)}>
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
          <button className="buttom-Form" type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
