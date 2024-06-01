import { DB } from "@/lib/mysql";
export async function getPromo() {
  const promociones = await DB.getPromociones();
  console.log("PROMOCIONES DE LA BD: ", promociones);
  return promociones;
}
