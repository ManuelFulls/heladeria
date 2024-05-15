import _ from "./page.module.css";
import { DB } from "@/lib/mysql";
import { redirect } from "next/navigation";

export default function Admin() {
  async function validarEmpleado(data: FormData) {
    "use server";
    const usuario: Partial<Empleado> = {
      matricula: data.get("matricula") as string,
      contraseña: data.get("password") as string,
    };
    const resultado = await DB.buscarEmpleado(usuario);
    try {
      if (resultado === null || resultado === undefined) {
        console.log("Usuario no valido");
      } else {
        redirect("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form action={validarEmpleado} className={_.form}>
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
