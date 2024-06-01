"use client";

import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { Header } from "../Header";

export default function VistaQR() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("carrito");
      if (storedData == null) {
        localStorage.setItem("carrito", "[]");
        setData([]);
        setLoading(false);
      } else {
        let carrito = JSON.parse(storedData);
        setData(carrito);
        setLoading(false);
      }
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

  const descargarQR = () => {
    const qrDiv = document.getElementById("qr-container");
    const svg = qrDiv.querySelector("svg");

    // Create a temporary canvas element
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = svg.width.baseVal.value;
    canvas.height = svg.height.baseVal.value;

    // Create a new image element
    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0);

      // Convert the canvas to a data URL
      const dataUrl = canvas.toDataURL("image/png");

      // Create a temporary link element and trigger the download
      const link = document.createElement("a");
      link.download = "qr-code.png";
      link.href = dataUrl;
      link.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(svg.outerHTML);
  };

  return (
    <div>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>No hay productos seleccionados</p>
      ) : (
        <div className="qr">
          <h1>CODIGO QR</h1>
          <div id="qr-container">
            <QRCode
              value={JSON.stringify({
                pedido: data.map((producto) => ({
                  nombre: producto.nombre,
                  envase: producto.envase,
                  precio: producto.precio,
                  total: producto.total,
                })),
                total: calcularTotal(data),
              })}
            />
          </div>
          <button onClick={descargarQR}>Descargar</button>
        </div>
      )}
    </div>
  );
}
