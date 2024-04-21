import React from 'react';
import Image from 'next/image';
import vainilla from "@/assets/img/vainilla.jpg"
import fresa from "@/assets/img/fresa.jpg"
import chocolate from "@/assets/img/chocolate.jpg"
import maracuya from "@/assets/img/maracuya.jpg"

export default function IceCreamMenu() {
  return (
    <section className="helados-de-crema">
      <h1 className="titulo-seccion">HELADOS DE CREMA</h1>
      <div className="lista-helados">
        <div className="helado">
          <Image src={vainilla} alt="Helado de Vainilla" width={300} height={200}/>
          <h2>Helado de Vainilla</h2>
        </div>
        <div className="helado">
          <Image src={fresa} alt="Helado de Fresa" width={300} height={200} />
          <h2>Helado de Fresa</h2>
        </div>
        <div className="helado">
          <Image src={chocolate} alt="Helado de Chocolate" width={300} height={200}/>
          <h2>Helado de Fresa</h2>
        </div>
        <div className="helado">
          <Image src={maracuya} alt="Helado de Maracuya" width={300} height={200} />
          <h2>Helado de Fresa</h2>
        </div>
      </div>
    </section>
  );
}
