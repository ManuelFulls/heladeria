import React from 'react';
import Image from 'next/image';
import imagen1 from "@/assets/img/OIP (1).jpg"
import imagen2 from "@/assets/img/OIP (2).jpg"
export default function Promociones() {
  return (
    <section>
      
      <div className="promociones-lista">
        <div className="promocion">
          <h2>¡Helado del Día!</h2>
          <p>Compra un helado grande y obtén el segundo al 30% de descuento.</p>
          <Image src={imagen1} alt=''></Image>
        </div>
        <div className="promocion">
          <h2>Hora del helado</h2>
          <p>Los martes y jueves, de 3:00 PM a 5:00 PM, todos los helados tienen un 20% de descuento.</p>
          <Image src={imagen2} alt= ""></Image>
        </div>
        <div className="promocion">
          <h2>Promoción Familiar</h2>
          <h3>Moficiacion equiswewe</h3>
          <p>sd</p>
          <p>Helados 2x1 para los niños y para los adultos el 5% de descuento</p>
        </div>
      </div>
    </section>
  );
}