"use client";

import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

export default function VistaQR() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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
      total += producto.precio;
    });
    return total;
  };

  const descargarQR = () => {
    const qrDiv = document.getElementById('qr-container');
    const svg = qrDiv.querySelector('svg');

    // Create a temporary canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = svg.width.baseVal.value;
    canvas.height = svg.height.baseVal.value;

    // Create a new image element
    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0);

      // Convert the canvas to a data URL
      const dataUrl = canvas.toDataURL('image/png');

      // Create a temporary link element and trigger the download
      const link = document.createElement('a');
      link.download = 'qr-code.png';
      link.href = dataUrl;
      link.click();
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(svg.outerHTML);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : data.length == 0 ? (
        <p>No hay productos seleccionados</p>
      ) : (
        <div className="qr">
            <h1>CODIGO QR</h1>
            <div id="qr-container">
            <QRCode value={JSON.stringify(
            {
                id_compra: '',
                productos: data.map(i => ({id: i.id, cantidad: i.cantidad, precio: i.precio}))
            }
            
        )}/>
            </div>

        <button onClick={descargarQR}>Descargar</button>
        </div>
      )}
    </div>
  );
}
