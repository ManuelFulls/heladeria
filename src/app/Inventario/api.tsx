"use server";
import { DB } from "@/lib/mysql";

export async function getProduct() {
  const productos = await DB.getProducts();
  return productos;
}

export async function name() {
  try {
    const idResult = await DB.lastIdProduct();
    console.log("ULTIMO ID PRODUCTO", idResult);
  } catch (error) {
    console.error("Error:", error);
  }
}

// FUNCION PARA RECUPERAR LOS DATOS DEL FORMULARIO
export async function procesarForm(data: FormData) {
  const producto: Partial<Producto> = {
    id_producto: parseInt(data.get("id_producto") as string),
    nombre: data.get("nombre") as string,
    tipo: data.get("tipo") as string,
    precio: data.get("precio") as any,
    sabor: data.get("sabor") as string,
    cantidad: parseInt(data.get("cantidad") as string),
    estado: data.get("estado") as string,
    imagen: data.get("imagen") as string,
    fecha: data.get("fecha")
      ? new Date(data.get("fecha") as string).toISOString().split("T")[0]
      : undefined,
  };

  const resultado = await DB.insertProduct(producto);
  console.log("Producto agregado correctamente");
  console.log(producto);

  // redirect("/");
}

//EDITAR

export async function editarForm(data: FormData) {
  const producto: Partial<Producto> = {
    id_producto: parseInt(data.get("id_producto") as string),
    nombre: data.get("nombre") as string,
    tipo: data.get("tipo") as string,
    precio: data.get("precio") as any,
    sabor: data.get("sabor") as string,
    cantidad: parseInt(data.get("cantidad") as string),
    estado: data.get("estado") as string,
    imagen: data.get("imagen") as string,
    fecha: data.get("fecha")
      ? new Date(data.get("fecha") as string).toISOString().split("T")[0]
      : undefined,
  };

  const resultado = await DB.updateProduct(producto);
  console.log("Producto modificado correctamente");
  console.log(producto);
}

//ELIMINAR
export async function deleteForm(data: FormData) {
  //"use server";
  const producto: Partial<Producto> = {
    id_producto: parseInt(data.get("id") as string),
  };
  const resultado = await DB.deleteProdructo(producto);
  console.log("Producto eliminado correctamente");
  console.log(producto);
}
