"use client";

import { useRouter } from "next/router";
import _ from "./page.module.css";
import { DB } from "@/lib/mysql";

export default function LoginForm() {
  const router = useRouter();

  async function validarEmpleado(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Evita la recarga de la página por defecto del formulario
    const formData = new FormData(event.currentTarget);
    const matricula = formData.get("matricula") as string;
    const password = formData.get("password") as string;

    try {
      const resultado = await DB.buscarEmpleado({
        matricula,
        password: password,
      });
      if (resultado === null || resultado === undefined) {
        console.log("Usuario no válido");
      } else {
        router.push("/"); // Redirige al usuario a la página de inicio
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={validarEmpleado} className={_.form}>
      <h1 className={_.titulo}>Ingresar al sistema</h1>
      <label className={_.label} htmlFor="matricula">
        Matricula
      </label>
      <input className={_.input} name="matricula" type="text" />
      <label className={_.label} htmlFor="contraseña">
        Contraseña
      </label>
      <input className={_.input} name="password" type="password" />

      <button type="submit" className={_.boton}>
        Ingresar
      </button>
    </form>
  );
}
