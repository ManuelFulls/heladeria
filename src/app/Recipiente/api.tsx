"use server";

import { DB } from "@/lib/mysql";

export async function api() {
  const envases = await DB.getEnvases();
  return envases;
}
export async function insertarForm(data: FormData) {
  //"use server";
  const envase: Partial<Envase> = {
    id_envase: parseInt(data.get("id") as string),
    nombre: data.get("nombre") as string,
    cantidad: parseInt(data.get("cantidad") as string),
    fecha: data.get("fecha")
      ? new Date(data.get("fecha") as string).toISOString().split("T")[0]
      : undefined,
  };
  const resultado = await DB.insertEnvase(envase);
  console.log("Producto agregado correctamente");
  console.log(envase);
}

//EDITAR
export async function editarForm(data: FormData) {
  //"use server";
  const envase: Partial<Envase> = {
    id_envase: parseInt(data.get("id") as string),
    nombre: data.get("nombre") as string,
    cantidad: parseInt(data.get("cantidad") as string),
    fecha: data.get("fecha")
      ? new Date(data.get("fecha") as string).toISOString().split("T")[0]
      : undefined,
  };
  const resultado = await DB.updateEnvase(envase);
  console.log("Envase modificado correctamente");
  console.log(envase);
}

//ELIMINAR
export async function deleteForm(data: FormData) {
  //"use server";
  const envase: Partial<Envase> = {
    id_envase: parseInt(data.get("id") as string),
  };
  const resultado = await DB.deleteEnvase(envase);
  console.log("Producto eliminado correctamente");
  console.log(envase);
}
