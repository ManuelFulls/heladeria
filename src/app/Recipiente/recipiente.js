import { DB } from "@/lib/mysql";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nombre, cantidad, fecha } = req.body;
    const envase = {
      nombre,
      cantidad: parseInt(cantidad),
      fecha: new Date(fecha).toISOString().split("T")[0],
    };
    const resultado = await DB.insertEnvase(envase);
    res.status(200).json({ message: "Producto agregado correctamente", envase });
  } else if (req.method === "GET") {
    const envases = await DB.getEnvases();
    res.status(200).json(envases);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
