"use server";

import { DB } from "@/lib/mysql";

export async function api() {
  const promociones = await DB.getPromopciones();
  return promociones;
}

export async function procesarForm(data: FormData) {
  //"use server";
  const promocion: Partial<Promocion> = {
    id_promocion: parseInt(data.get("id") as string),
    tipo_promocion: data.get("tipo_promo") as string,
    descripcion: data.get("descripcion") as string,
    precio_especial: parseInt(data.get("precio_especial") as string),
    fecha_inicio: data.get("fecha")
      ? new Date(data.get("fecha") as string).toISOString().split("T")[0]
      : undefined,
  };
  const resultado = await DB.insertPromotion(promocion);
  console.log("Producto agregado correctamente");
  console.log(promocion);
}
