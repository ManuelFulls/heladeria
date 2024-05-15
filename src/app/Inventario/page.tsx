import Navigation from "@/components/navegation/index";
import styles from "./Inventario.module.css";
import { Edit, Delete } from "@/components/icons"; // Importa los iconos
import { DB } from "@/lib/mysql";
import { redirect } from "next/navigation";

export default async function Inventario() {
  // FUNCION PARA RECUPERAR LOS DATOS DEL FORMULARIO
  async function procesarForm(data: FormData) {
    "use server";
    const producto: Partial<Producto> = {
      nombre: data.get("nombre") as string,
      tipo: data.get("tipo") as string,
      precio: data.get("precio") as any,
      tipo_envase: parseInt(data.get("envase") as any),
      sabor: data.get("sabor") as string,
      cantidad: parseInt(data.get("cantidad") as string),
      estado: data.get("estado") as string,
      imagen: data.get("url_imagen") as string,
    };
    const resultado = await DB.insertProduct(producto);
    console.log("Producto agregado correctamente");
    console.log(producto);
    // redirect("/");
  }

  const products = await DB.getProducts();

  return (
    <>
      <Navigation />
      <form action={procesarForm} className={styles.form}>
        <div className={styles.container_input}>
          <div className={styles.nombre}>
            <label className={styles.span1}>Nombre</label>
            <input className={styles.input1} type="text" name="nombre" />
          </div>
          <div>
            <span className={styles.span1}>Tipo</span>
            <input className={styles.input1} type="text" name="tipo" />
          </div>
          <div>
            <span className={styles.span1}>Precio</span>
            <input className={styles.input1} type="text" name="precio" />
          </div>
          <div>
            <span className={styles.span1}>Envase</span>
            <input className={styles.input1} type="text" name="envase" />
          </div>
          <div>
            <span className={styles.span1}>Sabor</span>
            <input className={styles.input1} type="text" name="sabor" />
          </div>
          <div>
            <span className={styles.span1}>Cantidad</span>
            <input className={styles.input1} type="text" name="cantidad" />
          </div>
          <div>
            <span className={styles.span1}>Estado</span>
            <input className={styles.input1} type="text" name="estado" />
          </div>
          <div>
            <span className={styles.span1}>Imagen</span>
            <input className={styles.input1} type="text" name="url_imagen" />
          </div>
          <button type="submit" className={styles.boton}>
            Agregar
          </button>
        </div>
      </form>

      <h2 className={styles.Product}>Productos</h2>
      <div className="tabla">
        <table>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Precio (C/U)</th>
            <th>Envase</th>
            <th>Sabor</th>
            <th>Cantidad</th>
            <th>Estado</th>
            <th>Imagen</th>
            <th></th>
          </tr>

          {/* Mapeo de cada uno de los productos en la tabla */}
          {products.map((producto, index) => (
            <tr key={producto.id_producto}>
              <td>{producto.nombre}</td>
              <td>{producto.tipo}</td>
              <td>{producto.precio}</td>
              <td>{producto.tipo_envase}</td>
              <td>{producto.sabor}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.estado}</td>
              <td>{producto.imagen}</td>
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
