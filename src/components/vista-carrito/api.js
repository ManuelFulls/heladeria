import {DB} from "/Users/Jesus/heladeria/src/lib/mysql"



//import { DB } from "@/lib/mysql";
export function fecha() {
  const fechaActual = new Date();

  // Obtener el año, mes y día por separado
  const año = fechaActual.getFullYear();
  const mes = fechaActual.getMonth() + 1; // Nota: Los meses van de 0 a 11
  const dia = fechaActual.getDate();

  // Formatear la fecha en un formato específico
  const fechaFormateada = `${año}/${mes}/${dia}`;

  return fechaFormateada;
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const lastID = await DB.lastIDCART();
      res.status(200).json({ lastID });
    } catch (error) {
      console.error('Error al obtener el último ID del carrito:', error);
      res.status(500).json({ message: 'Error al obtener el último ID del carrito' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}