"use client";

import Navigation from "@/components/navegation/index";
import styles from "./Inventario.module.css";
import { Edit, Delete } from "@/components/icons"; // Importa los iconos
import { useEffect, useState } from "react";
import { editarForm, getProduct, deleteForm, procesarForm, name } from "./api";
import { ChangeEvent } from "react";

export default function Inventario() {
  const [formState, setFormState] = useState({
    id_producto: "",
    nombre: "",
    tipo: "",
    precio: "",
    sabor: "",
    cantidad: "",
    estado: "",
    imagen: "",
    fecha: "",
  });

  const formVacio = () => {
    setFormState({
      id_producto: "",
      nombre: "",
      tipo: "",
      precio: "",
      sabor: "",
      cantidad: "",
      estado: "",
      imagen: "",
      fecha: "",
    });
  };

  const [accion, setAccion] = useState("");

  const {
    id_producto,
    nombre,
    tipo,
    precio,
    sabor,
    cantidad,
    estado,
    imagen,
    fecha,
  } = formState;

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [producto, setProducto] = useState<Producto[]>([]);

  useEffect(() => {
    async function fetchProductos() {
      try {
        const productoData = await getProduct(); //LLama a la funcion para obtener los productos
        setProducto(productoData); //Actualizae el estado producto con los datos obtenidos
        //************************** */
        //  await name();
      } catch (error) {
        console.log("Error al obtener los productos", error);
      }
    }
    fetchProductos(); //Llama a la funcion fetProducto al motar el componente
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  //************************************************************************************* */

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      if (accion === "boton1") {
        if (
          !id_producto ||
          !nombre ||
          !tipo ||
          !precio ||
          !sabor ||
          !cantidad ||
          !estado ||
          !imagen ||
          !fecha
        ) {
          alert("Todos los campos son obligatorios");
        } else {
          await procesarForm(formData);
          formVacio();
        }
      } else if (accion === "boton2") {
        if (
          !id_producto ||
          !nombre ||
          !tipo ||
          !precio ||
          !sabor ||
          !cantidad ||
          !estado ||
          !imagen ||
          !fecha
        ) {
          alert("Todos los campos son obligatorios");
        } else {
          await editarForm(formData);
          formVacio();
        }
      }

      console.log(formData);
      // Vuelve a obtener la lista de envases después de agregar un nuevo envase
      const updateProduct = await getProduct();
      setProducto(updateProduct); // Actualiza el estado envases con los nuevos datos

      //formVacio();
    } catch (error) {
      console.error("Error al procesar el formulario:", error);
    }
  };

  //****************************************************************** */

  const handleEditClick = async (producto: Producto) => {
    setFormState({
      id_producto: producto.id_producto.toString(),
      nombre: producto.nombre,
      tipo: producto.tipo,
      precio: producto.precio.toString(),
      sabor: producto.sabor,
      cantidad: producto.cantidad.toString(),
      estado: producto.estado,
      imagen: producto.imagen,
      fecha: producto.fecha,
    });
  };
  //****************************************************************** */

  const handleDeleteClick = async (producto: Producto) => {
    try {
      const formData = new FormData();
      formData.append("id", producto.id_producto.toString());
      await deleteForm(formData);
      console.log("Registro eliminado correctamente");

      const updateProducto = await getProduct();
      setProducto(updateProducto);
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
    }
  };
  return (
    <>
      <Navigation />
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <div className={styles.container_input}>
          <div className={styles.nombre}>
            <label className={styles.span1}>Id</label>
            <input
              className={styles.input1}
              type="text"
              name="id_producto"
              onChange={onInputChange}
              value={id_producto}
            />
          </div>
          <div className={styles.nombre}>
            <label className={styles.span1}>Nombre</label>
            <input
              className={styles.input1}
              type="text"
              name="nombre"
              onChange={onInputChange}
              value={nombre}
            />
          </div>
          <div>
            <span className={styles.span1}>Tipo</span>
            <input
              className={styles.input1}
              type="text"
              name="tipo"
              value={tipo}
              onChange={onInputChange}
            />
          </div>
          <div>
            <span className={styles.span1}>Precio</span>
            <input
              className={styles.input1}
              type="text"
              name="precio"
              value={precio}
              onChange={onInputChange}
            />
          </div>
          <div>
            <span className={styles.span1}>Sabor</span>
            <input
              className={styles.input1}
              type="text"
              name="sabor"
              value={sabor}
              onChange={onInputChange}
            />
          </div>
          <div>
            <span className={styles.span1}>Cantidad</span>
            <input
              className={styles.input1}
              type="text"
              name="cantidad"
              value={cantidad}
              onChange={onInputChange}
            />
          </div>
          <div>
            <span className={styles.span1}>Estado</span>
            <input
              className={styles.input1}
              type="text"
              name="estado"
              onChange={onInputChange}
              value={estado}
            />
          </div>
          <div>
            <span className={styles.span1}>Imagen</span>
            <input
              className={styles.input1}
              type="text"
              name="imagen"
              onChange={onInputChange}
              value={imagen}
            />
          </div>
          <div>
            <span className={styles.span1}>Fecha</span>
            <input
              className={styles.input1}
              type="date"
              name="fecha"
              onChange={onInputChange}
              value={fecha}
            />
          </div>
          <button
            type="submit"
            className={styles.boton}
            onClick={() => setAccion("boton1")}
          >
            Agregar
          </button>
          <button
            type="submit"
            className={styles.boton}
            onClick={() => setAccion("boton2")}
          >
            Editar
          </button>
        </div>
      </form>

      <h2 className={styles.Product}>Productos</h2>
      <div className="tabla">
        <table>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Precio (C/U)</th>
            <th>Sabor</th>
            <th>Cantidad</th>
            <th>Estado</th>
            {/*<th className={styles.imagen}>Imagen</th>*/}
            <th>Fecha</th>
            <th></th>
          </tr>

          {/* Mapeo de cada uno de los productos en la tabla */}
          {producto.map((producto, index) => (
            <tr key={producto.id_producto}>
              <td>{producto.id_producto}</td>
              <td>{producto.nombre}</td>
              <td>{producto.tipo}</td>
              <td>{producto.precio}</td>
              <td>{producto.sabor}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.estado}</td>
              {/*  <td>{producto.imagen}</td>*/}
              <td>{producto.fecha}</td>
              <td className={styles.container_boton}>
                <button
                  className={styles.boton1}
                  onClick={() => handleEditClick(producto)}
                >
                  <Edit />
                </button>
                <button
                  className={styles.boton1}
                  onClick={() => handleDeleteClick(producto)}
                >
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
