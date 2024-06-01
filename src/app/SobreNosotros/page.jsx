import { Header } from "@/components/Header";

export default function SobreNosotros() {
  return (
    <>
      <Header />
      <section className="seccion-nosotros">
        <h1 className="sobre-nosotros-title">Nuestra Historia</h1>
        <p className="sobre-nosotros-text">
          Somos una heladería familiar dedicada a ofrecer los helados más
          deliciosos y refrescantes para nuestros clientes. Nuestro equipo está
          comprometido a utilizar los mejores ingredientes naturales y frescos
          en cada uno de nuestros productos. Desde que abrimos nuestras puertas,
          nos esforzamos por crear un ambiente acogedor y amigable donde
          nuestros clientes puedan disfrutar de una experiencia memorable con
          cada visita.
        </p>
      </section>
      <p className="sobre-nosotros">
        ¡Gracias por apoyarnos y esperamos verte pronto en nuestra heladería!
      </p>
    </>
  );
}
