"use client";

import { useReducer, useState } from "react";
import Styles from "./page.module.css";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function Admin() {
  const [count, setCount] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    if (
      (data["matricula"] === "jesus123") &
      (data["password"] === "Juchiman")
    ) {
      alert(`Datos correctos ¡BIENVENIDO DE NUEVO ${data["matricula"]}!`);
    } else {
      alert("Datos incorrectos ");
    }
  });

  return (
    <form onSubmit={onSubmit} className={Styles.form} action="">
      <h1 className={Styles.titulo}>Ingresar al sistema</h1>
      <label className={Styles.label} htmlFor="matricula">
        Matricula
      </label>
      <input className={Styles.input} {...register("matricula")} type="text" />
      <label className={Styles.label} htmlFor="contraseña">
        Contraseña
      </label>
      <input
        className={Styles.input}
        type="password"
        {...register("password")}
      />

      <button type="submit" className={Styles.boton}>
        Ingresar
      </button>
    </form>
  );
}
