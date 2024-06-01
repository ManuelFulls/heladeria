"use server";

import { DB } from "@/lib/mysql";

export async function getPromo() {
  const promociones = await DB.getPromociones();
  return promociones;
}

export async function getProductos() {
  const productos = await DB.getProducts();
  return productos;
}

//AGREGAR UNA PROMOCION
export async function procesarForm(data: FormData) {
  //"use server";
  const promocion: Partial<Promocion> = {
    id_promocion: parseInt(data.get("id_promocion") as string),
    tipo_promocion: data.get("tipo_promocion") as string,
    descripcion: data.get("descripcion") as string,
    id_producto: parseInt(data.get("id_producto") as string),
    precio_especial: parseInt(data.get("precio_especial") as string),
    fecha_inicio: data.get("fecha_inicio")
      ? new Date(data.get("fecha_inicio") as string).toISOString().split("T")[0]
      : undefined,
    fecha_fin: data.get("fecha_fin")
      ? new Date(data.get("fecha_fin") as string).toISOString().split("T")[0]
      : undefined,
  };
  const resultado = await DB.insertPromotion(promocion);
  console.log("Producto agregado correctamente");
  console.log(promocion);
}
//MODIFICAR UNA PROMOCION

export async function editarForm(data: FormData) {
  //"use server";
  const promocion: Partial<Promocion> = {
    id_promocion: parseInt(data.get("id_promocion") as string),
    tipo_promocion: data.get("tipo_promocion") as string,
    descripcion: data.get("descripcion") as string,
    id_producto: parseInt(data.get("id_producto") as string),
    precio_especial: parseInt(data.get("precio_especial") as string),
    fecha_inicio: data.get("fecha_inicio")
      ? new Date(data.get("fecha_inicio") as string).toISOString().split("T")[0]
      : undefined,
    fecha_fin: data.get("fecha_fin")
      ? new Date(data.get("fecha_fin") as string).toISOString().split("T")[0]
      : undefined,
  };
  const resultado = await DB.updatePromo(promocion);
  console.log("Producto modificado correctamente");
  console.log(promocion);
}

//ELIMINAR
export async function deleteForm(data: FormData) {
  //"use server";
  const promocion: Partial<Promocion> = {
    id_promocion: parseInt(data.get("id_promocion") as string),
  };
  const resultado = await DB.deletePromocion(promocion);
  console.log("Producto eliminado correctamente");
  console.log(promocion);
}
