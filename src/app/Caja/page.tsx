import React from "react";
import Navbar from "@/components/navegation/index";
import styles from "./Caja.module.css";
const TableComponent = () => {
  return (
    <>
      <Navbar />
      <h1 className={styles.title}>Ventas </h1>
      <div className="tabla">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Precio (C/U)</th>
              <th>Sabor</th>
              <th>Cantidad</th>
              <th>Estado</th>
              <th>Fecha</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí puedes añadir las filas de datos */}
            {/* Ejemplo:
          <tr>
            <td>1</td>
            <td>Producto 1</td>
            <td>Tipo 1</td>
            <td>$10</td>
            <td>Chocolate</td>
            <td>5</td>
            <td>Disponible</td>
            <td>2024-05-30</td>
            <td><button>Acción</button></td>
          </tr>
          */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableComponent;
