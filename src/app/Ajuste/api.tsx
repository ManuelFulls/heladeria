"use server";

import { DB } from "@/lib/mysql";

export default async function settingUser(usuario: Partial<Empleado>) {
  const empleado = await DB.getEmpleadoById(usuario.matricula as any);
  //Asignación de valores a un objeto que sigue la interfaz Empleado
  console.log("DATOS DEL EMPELADO: ", empleado);
  return empleado;
}

export async function EditForm(data: FormData) {
  //"use server";
  const empleado: Partial<Empleado> = {
    nombre: data.get("nombre") as string,
    password: data.get("password") as string,
    telefono: parseInt(data.get("telefono") as string),
  };
  const resultado = await DB.insertEmpleado(empleado);
  console.log("Empleado modificado correctamente: ", empleado);
}
