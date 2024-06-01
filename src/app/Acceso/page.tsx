import Navigation from "@/components/navegation/index";
import styles from "./acceso.module.css";

export default function Acceso() {
  return (
    <>
      <Navigation />
      <section className={styles.section}>
        <div className={styles.text}>
          <h1 className={styles.titulo}>Control del inventario</h1>
          <span className={styles.texto}>
            Aqui podrá agregar los diferentes productos al sistema, asi como
            tambien editarlos, y si desea podrá dar de alta a un nuevo empleado
            en el sistema
          </span>
        </div>
        <div className={styles.images}>
          <div className={styles.logo}>
            <img
              className={styles.logoImg}
              src="LOGO.png"
              alt="Heladeria Juchiman"
            />
          </div>
        </div>
      </section>
    </>
  );
}
