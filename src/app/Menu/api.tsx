"use server";
import { DB } from "@/lib/mysql";

export async function getHeladosCrema() {
  const productos1 = await DB.getHeladosCrema();
  console.log(productos1);
  return productos1;
}

export async function getPromo() {
  const promociones = await DB.getPromociones();
  return promociones;
}

export async function getHeladosAgua() {
  const productos2 = await DB.getHeladosAgua();
  return productos2;
}

export async function getPaletaCrema() {
  const productos3 = await DB.getPaletasCrema();
  return productos3;
}

export async function getPaletaAgua() {
  const productos4 = await DB.getPaletasAgua();
  return productos4;
}

export async function getEnvases() {
  const envases = await DB.getEnvases();
  return envases;
}
