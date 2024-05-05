import Styles from "./page.module.css";
//import validarEmpleado from "./funcion";
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
    console.log(resultado);
    if (resultado === null) {
      console.log("Usuario no valido");
    } else {
      console.log(
        `Bienvenido: ${resultado.nombre}  con matricula:${resultado.matricula} `
      );
      redirect("/Acceso");
    }
  }

  return (
    <form action={validarEmpleado} className={Styles.form}>
      <h1 className={Styles.titulo}>Ingresar al sistema</h1>
      <label className={Styles.label} htmlFor="matricula">
        Matricula
      </label>
      <input className={Styles.input} name="matricula" type="text" />
      <label className={Styles.label} htmlFor="contraseña">
        Contraseña
      </label>
      <input className={Styles.input} name="password" type="password" />

      <button type="submit" className={Styles.boton}>
        Ingresar
      </button>
    </form>
  );
}
