import Navigation from "@/components/navegation/index";
import { DB } from "@/lib/mysql";
import styles from "./Recipiente.module.css";
import { Edit, Delete } from "@/components/icons/index";
export default async function Recipiente() {
  async function procesarForm(data: FormData) {
    "use server";
    const envase: Partial<Envase> = {
      nombre: data.get("nombre") as string,
      cantidad: parseInt(data.get("cantidad") as string),
    };
    const resultado = await DB.insertEnvase(envase);
    console.log("Producto agregado correctamente");
    console.log(envase);
    // redirect("/");
  }

  const envases = await DB.getEnvases();

  return (
    <>
      <Navigation />
      <h1 className={styles.title}>Recipientes</h1>
      <form action={procesarForm} className={styles.form}>
        <div className={styles.container_input}>
          <div className={styles.nombre}>
            <label className={styles.span1}>Nombre</label>
            <input className={styles.input1} type="text" name="nombre" />
          </div>
          <div>
            <span className={styles.span1}>Cantidad</span>
            <input className={styles.input1} type="text" name="cantidad" />
          </div>
          <div>
            <button type="submit" className={styles.boton}>
              Agregar
            </button>
          </div>
        </div>
      </form>

      <h2 className={styles.Product}>Recipientes</h2>
      <div className="tabla">
        <table>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th></th>
          </tr>

          {/* Mapeo de cada uno de los productos en la tabla */}
          {envases.map((envase, index) => (
            <tr key={envase.id_envase}>
              <td>{envase.nombre}</td>

              <td>{envase.cantidad}</td>

              <td className={styles.container_boton}>
                <button className={styles.boton1}>
                  <Edit />
                </button>
                <button className={styles.boton1}>
                  <Delete />
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
