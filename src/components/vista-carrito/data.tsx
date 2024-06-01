import { DB } from "@/lib/mysql";

export function getPromo() {
  const promociones = DB.getPromociones();
  return promociones;
}
