import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.barratitle}>
          <img src="LOGO.png" alt="Logo Juchiman" className={styles.imagen} />
          <h2 className={styles.title}>HELADERIA JUCHIMAN</h2>
        </div>
        <div className={styles.conlink}>
          <Link href={`/`}>
            <p className={styles.link}>Inicio</p>
          </Link>
          <Link href={`/Promocion/`}>
            <p className={styles.link}>Promociones</p>
          </Link>
          <Link href={`/Menu/`}>
            <p className={styles.link}>Menú</p>
          </Link>
          <Link href={`/Ordenar/`}>
            <p className={styles.link}>Ordenar</p>
          </Link>
          <Link href={`/SobreNosotros/`}>
            <p className={styles.link}>Sobre Nosotros</p>
          </Link>
        </div>
      </div>
    </header>
  );
};
