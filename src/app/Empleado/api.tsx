"use server";

import { DB } from "@/lib/mysql";

export async function insertarForm(data: FormData) {
  //"use server";
  const empleado: Partial<Empleado> = {
    matricula: data.get("matricula") as string,
    nombre: data.get("nombre") as string,
    password: data.get("password") as string,
    telefono: parseInt(data.get("telefono") as string),
  };
  const resultado = await DB.insertEmpleado(empleado);
  console.log("Empleado agregado correctamente: ", empleado);
}
