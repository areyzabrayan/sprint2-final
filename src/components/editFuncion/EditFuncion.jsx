import React from "react";
import { useForm } from "react-hook-form";
import "./editFuncion.scss";
import { saveFunction } from "../../services/getFunctions";
import { useContext } from "react";
import { AppContext } from "../router/router";

const EditFuncion = () => {
  const { setIsLogin } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await saveFunction(data);
    Swal.fire("Good job!", "You clicked the button!", "success");
  };
  return (
    <main className="d-flex justify-content-center align-items-center vw-80 vh-80 editfuncion">
      <form
        className="card p-5 bg-body-tertiary"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <label className="form-label">
            <span>idMovie</span>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Escriba el nombre del cinema"
              {...register("idMovie", { required: true })}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>cinemaId</span>
            <input
              type="number"
              className="form-control mt-2"
              placeholder="Escriba la cantidad de salas"
              {...register("cinemaId", { required: true })}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>dia</span>
            <input
              type="date"
              className="form-control mt-2"
              placeholder="Escriba la cantidad de salas"
              {...register("dia", { required: true })}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>horaFuncion1</span>
            <input
              type="time"
              className="form-control mt-2"
              placeholder="Escriba la cantidad de salas"
              {...register("horaFuncion1", { required: true })}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>horaFuncion2</span>
            <input
              type="time"
              className="form-control mt-2"
              placeholder="Escriba la cantidad de salas"
              {...register("horaFuncion2", { required: true })}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>horaFuncion3</span>
            <input
              type="time"
              className="form-control mt-2"
              placeholder="Escriba la cantidad de salas"
              {...register("horaFuncion3", { required: true })}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-success">
          Agregar Función
        </button>
      </form>
    </main>
  );
};

export default EditFuncion;
