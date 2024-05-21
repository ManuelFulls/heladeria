"use client";
import Navigation from "@/components/navegation/index";
import styles from "./Empleado.module.css";
import { useEffect, useState } from "react";
import { insertarForm } from "./api";
import { useRef } from "react";
import { ChangeEvent, FormEvent } from "react";
export default function Empleado() {
  const [formState, setFormState] = useState({
    matricula: "",
    nombre: "",
    contraseña: "",
    telefono: "",
  });

  const { matricula, nombre, contraseña, telefono } = formState;
  const formVacio = () => {
    setFormState({
      matricula: "",
      nombre: "",
      contraseña: "",
      telefono: "",
    });
  };
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //******************************************************** */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formState.nombre, "", formState.contraseña);
    try {
      await insertarForm(formData);
      formVacio();
    } catch (error) {
      console.error("Error al procesar el formulario:", error);
    }
  };

  return (
    <>
      <Navigation />
      <h1>EMPLEADO</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.container_input}>
          <div className={styles.nombre}>
            <label className={styles.span1}>Matricula</label>
            <input
              className={styles.input1}
              type="text"
              name="matricula"
              onChange={onInputChange}
              value={matricula}
            />
          </div>
          <div className={styles.nombre}>
            <label className={styles.span1}>Nombre</label>
            <input
              className={styles.input1}
              type="text"
              name="nombre"
              onChange={onInputChange}
              value={nombre}
            />
          </div>
          <div>
            <span className={styles.span1}>Contraseña</span>
            <input
              className={styles.input1}
              type="text"
              name="contraseña"
              onChange={onInputChange}
              value={contraseña}
            />
          </div>
          <div>
            <span className={styles.span1}>Telefono</span>
            <input
              className={styles.input1}
              type="text"
              name="telefono"
              onChange={onInputChange}
              value={telefono}
            />
          </div>
          <div>
            <button type="submit" className={styles.boton}>
              Agregar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
