"use client";
import styles from "./Promo.module.css";
import Navigation from "@/components/navegation/index";
import { Edit, Delete } from "@/components/icons/index";
import { useEffect, useState } from "react";
import { api, procesarForm } from "./api";
import { useRef } from "react";
export default function () {
  const handleSubmit = () => {};

  return (
    <>
      <Navigation />
      <h1>PROMOCIONES</h1>
      <h1 className={styles.title}>Promociones</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.container_input}>
          <div className={styles.nombre}>
            <label className={styles.span1}>Id</label>
            <input className={styles.input1} type="text" name="id" />
          </div>
          <div className={styles.nombre}>
            <label className={styles.span1}>Tipo promo</label>
            <input
              className={styles.input1}
              type="text"
              name="tipo_promocion"
            />
          </div>
          <div>
            <span className={styles.span1}>Descripcion</span>
            <input className={styles.input1} type="text" name="descripcion" />
          </div>
          <div>
            <span className={styles.span1}>Producto</span>
            <input className={styles.input1} type="Date" name="id_producto" />
          </div>
          <div>
            <span className={styles.span1}>Precio especial</span>
            <input
              className={styles.input1}
              type="Date"
              name="precio_especial"
            />
          </div>
          <div>
            <span className={styles.span1}>Fecha inicio</span>
            <input className={styles.input1} type="Date" name="fecha_inicio" />
          </div>
          <div>
            <span className={styles.span1}>Fecha fin</span>
            <input className={styles.input1} type="Date" name="fecha_fin" />
          </div>
          <div>
            <button type="submit" className={styles.boton}>
              Agregar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
