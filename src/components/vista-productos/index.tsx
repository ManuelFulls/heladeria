"use client";

import { useState } from "react";
import Image from "next/image";

export default function VistaProductos(producto: any) {
  return (
    <section className="helados-de-crema">
      <div className="lista-helados">
        {producto.map((product: any) => (
          <div className="helado" key={product.id_producto}>
            <h2>{product.nombre}</h2>
            <img
              src={product.imagen}
              alt={product.nombre}
              width={200}
              height={260}
              className="imagen-helado"
            />

            <div className="detalles-helado">
              <h3>$ {product.precio}</h3>
              <button className="boton">Elegir</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
