import React from "react";
import Image from "next/image";
import imagen1 from "@/assets/img/OIP (1).jpg";
import imagen2 from "@/assets/img/OIP (2).jpg";
import imagen3 from "@/assets/img/helado 2.jpg";
import imagen4 from "@/assets/img/helado 4.jpg";

export default function Promociones() {
  return (
    <section>
      <div className="promociones-lista">
        <div className="promocion">
          <h2>¡Helado del Día!</h2>
          <p className="descripcion">
            Compra un helado grande y obtén el segundo al 30% de descuento.
          </p>
          <Image src={imagen1} alt="" />
        </div>
        <div className="promocion">
          <h2>Promoción de Verano</h2>
          <p className="descripcion">
            Disfruta de un helado gratis en la compra de 2 helados grandes.
          </p>
          <Image src={imagen4} alt="" width={300} height={200} />
        </div>
        <div className="promocion">
          <h2>Hora del helado</h2>
          <p className="descripcion">
            Los martes y jueves, de 3:00 PM a 5:00 PM, todos los helados tienen
            un 20% de descuento.
          </p>
          <Image src={imagen2} alt="" />
        </div>
        <div className="promocion">
          <h2>Promoción Familiar</h2>
          <p className="descripcion">
            Helados 2x1 para los niños y para los adultos el 5% de descuento
          </p>
          <Image src={imagen3} alt="" width={300} height={200} />
        </div>
      </div>
    </section>
  );
}
