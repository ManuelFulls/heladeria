'use client'

import {useState} from "react";
import Image from "next/image";

export default function VistaProductos({titulo,lista}) {

  const seleccionar = (id) => {
    if (window.localStorage != null){
      let carritoString = localStorage.getItem("carrito");
      if (carritoString == null) {
        localStorage.setItem("carrito", "[]");
      }
      
      let carrito = JSON.parse(localStorage.getItem("carrito"));
      
      let producto = lista.find(i => i.id == id);
      
      if (producto === undefined){
        console.log("No se pudo encontrar el producto con el id " + id);
        return;
      }
      
      let index = carrito.findIndex(item => item.id === id);
      if (index !== -1) {
        carrito[index].cantidad += 1;
        carrito[index].total += producto.precio
      } else {
        producto.cantidad = 1;
        producto.total = producto.precio
        carrito.push(producto);
      }
      
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  }
  


  return (
    <section className="helados-de-crema">
      <h1 className="titulo-seccion">{titulo}</h1>
      <div className="lista-helados">
        {lista.map((e, i) => (
          <div className="helado" key={i}>
            <h2>{e.texto}</h2> 
            <Image src={e.imagen} alt={e.texto} width={200} height={260} className="imagen-helado" />
            <div className="detalles-helado">
            <h3>$ {e.precio}</h3>
            <button className="comprar" onClick={()=> seleccionar(e.id)}>Elegir</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
