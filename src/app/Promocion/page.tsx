//PROMOCIONES

"use client";

import React from "react";
import Image from "next/image";
import imagen1 from "@/assets/img/OIP (1).jpg";
import imagen2 from "@/assets/img/OIP (2).jpg";
import imagen3 from "@/assets/img/helado 2.jpg";
import imagen4 from "@/assets/img/helado 4.jpg";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";

export default function Promociones() {
  return (
    <section>
      <Header />

      <div className="promociones-lista">
        <div className="promocion">
          <h2>¡Helado del Día!</h2>
          <p className="descripcion">
            !Aproveche nuestras promociones antes de que se acabe!{" "}
          </p>
        </div>
        <div className="promocion">
          <h2>Promoción de Verano</h2>
          <p className="descripcion">
            !De los sabores mas queridos viene nuestro precio especial de
            bienvenida!
          </p>
        </div>
        <div className="promocion">
          <h2>Hora del helado</h2>
          <p className="descripcion">
            !Precio especial para los jovenes que son el futuro de México!
          </p>
        </div>
        <div className="promocion">
          <h2>Promoción Familiar</h2>
          <p className="descripcion">
            !Con las festividades que se vienen, traen consigo promocion
            especial en estas temporadas de calor!
          </p>
        </div>
      </div>
    </section>
  );
}
