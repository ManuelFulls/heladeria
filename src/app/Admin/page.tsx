"use client";

import _ from "./page.module.css";
import { ChangeEvent } from "react";
import { useState } from "react";
import { validarEmpleado } from "./api";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Toaster, toast } from "react-hot-toast";

export default function Admin() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    matricula: "",
    password: "",
  });

  const { matricula, password } = formState;
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

    // Validación para campos vacíos
    if (!matricula || !password) {
      // toast.error("Todos los campos son obligatorios");

      alert("Todos los campos son obligatorios");
    } else {
      try {
        const resultado = await validarEmpleado(formData);
        resultado === true
          ? router.push("/Acceso")
          : alert("Usuario no valido");
      } catch (error) {
        console.error("Error al procesar el formulario:", error);
      }
    }
  };

  return (
    <>
      <Header />

      <form onSubmit={handleSubmit} className={_.form} autoComplete="off">
        <h1 className={_.titulo}>Ingresar al sistema</h1>
        <label className={_.label} htmlFor="matricula">
          Matricula
        </label>
        <input
          className={_.input}
          name="matricula"
          type="text"
          onChange={onInputChange}
          value={matricula}
        />
        <label className={_.label} htmlFor="password">
          Contraseña
        </label>
        <input
          className={_.input}
          name="password"
          type="password"
          onChange={onInputChange}
          value={password}
        />
        <button type="submit" className={_.boton}>
          Ingresar
        </button>
      </form>
    </>
  );
}
