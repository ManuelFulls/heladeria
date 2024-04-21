"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function VistaCarrito() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("carrito");
      if (storedData == null) {
        localStorage.setItem("carrito", "[]");
        setData([]);
        setLoading(false);
      }
      let carrito = JSON.parse(storedData);
      setData(carrito);
      setLoading(false);
    } catch (e) {
      setData([]);
    }
  }, []);

  const calcularTotal = (lista) => {
    let total = 0;

    lista.forEach((producto) => {
      total += producto.total;
    });
    return total;
  };

  const confirmarCompra = ()=> {
    if (data != null && data.length != 0) {
        router.push('/Compra')
    }
  }

  const cancelarCompra = () => {
    if (window.localStorage){
        localStorage.setItem("carrito", "[]")
        window.location.href = "/Ordenar"
    }
  }


  return (
    <div>
      {loading ? (
        <div className="loading">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
                </svg>
                <h2>Cargando...</h2>
        </div>
      ) : data.length == 0 ? (
        <div className="no-productos">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
                </svg>
            <h2>No hay productos en tu carrito</h2>
        </div>
      ) : (
        <div className="tabla">
          <table>
            <tr>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio (C/U)</th>
              <th>Total</th>
            </tr>
            {data.map((e) => (
              <tr>
                <td>{e.texto}</td>
                <td>{e.cantidad ?? 1}</td>
                <td>${e.precio} MXN</td>
                <td>${e.total} MXN</td>
              </tr>
            ))}
          </table>
          <div className="cuenta-total">
            <span>Total:</span>
            <input type="number" disabled defaultValue={calcularTotal(data)} />
          </div>
          <div className="controles">
            <button className="cancelar-compra" onClick={cancelarCompra}>Cancelar</button>
            <button className="confirmar-compra" onClick={confirmarCompra}>Confirmar</button>
          </div>
        </div>
      )}
    </div>
  );
}
