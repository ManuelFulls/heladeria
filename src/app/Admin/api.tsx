"use server";
import { DB } from "@/lib/mysql";

import settingUser from "@/app/Ajuste/api";
import Ajuste from "@/app/Ajuste/page";
export async function validarEmpleado(data: FormData) {
  const usuario: Partial<Empleado> = {
    matricula: data.get("matricula") as string,
    password: data.get("password") as string,
  };
  const resultado = await DB.buscarEmpleado(usuario);
  try {
    if (resultado === null || resultado === undefined) {
      return false;
    } else {
      //se manda el usuario a la pagina de settings
      settingUser(usuario);
      // Ajuste(usuario);
      return true;
    }
  } catch (error) {
    console.log(error);
  }
}
