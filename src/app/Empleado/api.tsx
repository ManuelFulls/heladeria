"use server";

import { DB } from "@/lib/mysql";

export async function insertarForm(data: FormData) {
  //"use server";
  const empleado: Partial<Empleado> = {
    matricula: data.get("matricula") as string,
    nombre: data.get("nombre") as string,
    contraseña: data.get("contraseña") as string,
    telefono: parseInt(data.get("telefono") as string),
  };
  const resultado = await DB.insertEmpleado(empleado);
  console.log("Producto agregado correctamente22: ", empleado);
}
