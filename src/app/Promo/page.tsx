"use client";
import styles from "./Promo.module.css";
import Navigation from "@/components/navegation/index";
import { Edit, Delete } from "@/components/icons/index";
import { useEffect, useState } from "react";
import React from "react";

import {
  getPromo,
  procesarForm,
  editarForm,
  deleteForm,
  getProductos,
} from "./api";
import { useRef } from "react";
import { ChangeEvent } from "react";
export default function () {
  const [formState, setFormState] = useState({
    id_promocion: "",
    tipo_promocion: "",
    descripcion: "",
    id_producto: "",
    precio_especial: "",
    fecha_inicio: "",
    fecha_fin: "",
  });

  const formVacio = () => {
    setFormState({
      id_promocion: "",
      tipo_promocion: "",
      descripcion: "",
      id_producto: "",
      precio_especial: "",
      fecha_inicio: "",
      fecha_fin: "",
    });
  };

  const [productoSelect, setProductoSelect] = useState("");

  const [accion, setAccion] = useState("");

  const {
    id_promocion,
    tipo_promocion,
    descripcion,
    id_producto,
    precio_especial,
    fecha_inicio,
    fecha_fin,
  } = formState;

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [promocion, setPromo] = useState<Promocion[]>([]);
  //** */
  const [producto, setProducto] = useState<Producto[]>([]);
  useEffect(() => {
    async function fetchPromociones() {
      try {
        const promoData = await getPromo();
        setPromo(promoData);

        const productoData = await getProductos();
        setProducto(productoData);
      } catch (error) {
        console.log("Error al obtener las promociones", error);
      }
    }
    fetchPromociones();
  }, []);

  //********************************************************************** */

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      if (accion === "boton1") {
        if (
          !id_promocion ||
          !tipo_promocion ||
          !descripcion ||
          !precio_especial ||
          !fecha_inicio ||
          !fecha_fin
        ) {
          alert("Todos los campos son obligatorios");
        } else {
          await procesarForm(formData);
          formVacio();
          console.log(
            "PRODUCTO SELECCIONADO",
            productoSelect +
              " " +
              producto[parseInt(productoSelect) - 1].nombre +
              " de" +
              producto[parseInt(productoSelect) - 1].sabor
          );
        }
      } else if (accion === "boton2") {
        if (
          !id_promocion ||
          !tipo_promocion ||
          !descripcion ||
          !precio_especial ||
          !fecha_inicio ||
          !fecha_fin
        ) {
          alert("Todos los campos son obligatorios");
        } else {
          await editarForm(formData);
          formVacio();
        }
      }

      console.log(formData);
      const updatePromo = await getPromo();
      setPromo(updatePromo);

      //formVacio();
    } catch (error) {
      console.error("Error al procesar el formulario:", error);
    }
  };

  //****************************************************************** */

  const handleEditClick = async (promocion: Promocion) => {
    setFormState({
      id_promocion: promocion.id_promocion.toString(),
      tipo_promocion: promocion.tipo_promocion,
      descripcion: promocion.descripcion,
      id_producto: promocion.id_producto.toString(),
      precio_especial: promocion.precio_especial.toString(),
      fecha_inicio: promocion.fecha_inicio,
      fecha_fin: promocion.fecha_fin,
    });
    setProductoSelect(promocion.id_producto.toString());
  };
  //****************************************************************** */

  const handleDeleteClick = async (promocion: Promocion) => {
    try {
      const formData = new FormData();
      formData.append("id_promocion", promocion.id_promocion.toString());
      await deleteForm(formData);
      console.log("Registro eliminado correctamente");

      const updatePromo = await getPromo();
      setPromo(updatePromo);
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
    }
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setProductoSelect(event.target.value);
    setFormState({
      ...formState,
      id_producto: event.target.value,
    });
  };

  //******************************************************************************* */

  //********************************************************************************* */

  return (
    <>
      <Navigation />
      <h1 className={styles.title}>Promociones</h1>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <div className={styles.container_input}>
          <div className={styles.nombre}>
            <label className={styles.span1}>Id</label>
            <input
              className={styles.input1}
              type="text"
              name="id_promocion"
              value={id_promocion}
              onChange={onInputChange}
            />
          </div>
          <div className={styles.nombre}>
            <label className={styles.span1}>Tipo promo</label>
            <input
              className={styles.input1}
              type="text"
              name="tipo_promocion"
              value={tipo_promocion}
              onChange={onInputChange}
            />
          </div>
          <div>
            <span className={styles.span1}>Descripcion</span>
            <input
              className={styles.input1}
              type="text"
              name="descripcion"
              value={descripcion}
              onChange={onInputChange}
            />
          </div>
          <div>
            <label htmlFor="productoSelect">Producto</label>
            <select
              id="productoSelect"
              name="id_producto"
              value={parseInt(productoSelect)}
              onChange={handleSelectChange}
            >
              {producto.map((producto) => (
                <option key={producto.id_producto} value={producto.id_producto}>
                  {producto.nombre + ` de ` + producto.sabor}
                </option>
              ))}
            </select>
          </div>
          <div>
            <span className={styles.span1}>Precio especial</span>
            <input
              className={styles.input1}
              type="text"
              name="precio_especial"
              value={precio_especial}
              onChange={onInputChange}
            />
          </div>
          <div>
            <span className={styles.span1}>Fecha inicio</span>
            <input
              className={styles.input1}
              type="Date"
              name="fecha_inicio"
              value={fecha_inicio}
              onChange={onInputChange}
            />
          </div>
          <div>
            <span className={styles.span1}>Fecha fin</span>
            <input
              className={styles.input1}
              type="Date"
              name="fecha_fin"
              value={fecha_fin}
              onChange={onInputChange}
            />
          </div>
          <div></div>
          <div>
            <button
              type="submit"
              className={styles.boton}
              onClick={() => setAccion("boton1")}
            >
              Agregar
            </button>
          </div>
          <div>
            <button
              type="submit"
              className={styles.boton}
              onClick={() => setAccion("boton2")}
            >
              Editar
            </button>
          </div>
        </div>
      </form>

      <h2 className={styles.Product}>Promociones</h2>
      <div className="tabla">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Tipo Promocion</th>
              <th>Descripcion</th>
              <th>Producto </th>
              <th>Precio especial</th>
              <th>Fecha inicio</th>
              <th>Fecha fin</th>
              {/*<th className={styles.imagen}>Imagen</th>*/}
              <th></th>
            </tr>
          </thead>
          {/* Mapeo de cada uno de los productos en la tabla */}
          {promocion.map((promo, index) => (
            <tr key={promo.id_producto}>
              <td>{promo.id_promocion}</td>
              <td>{promo.tipo_promocion}</td>
              <td>{promo.descripcion}</td>
              <td>{promo.id_producto}</td>
              <td>{promo.precio_especial}</td>
              <td>{promo.fecha_inicio}</td>
              <td>{promo.fecha_fin}</td>
              {/*  <td>{producto.imagen}</td>*/}
              <td className={styles.container_boton}>
                <button
                  className={styles.boton1}
                  onClick={() => handleEditClick(promo)}
                >
                  <Edit />
                </button>
                <button
                  className={styles.boton1}
                  onClick={() => handleDeleteClick(promo)}
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
