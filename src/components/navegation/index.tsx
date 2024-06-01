import Link from "next/link";
import styles from "./navegation.module.css"; // Importa los estilos CSS
import dynamic from "next/dynamic";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.barratitle}>
          <img src="LOGO.png" alt="Logo Juchiman" className={styles.imagen} />
          <h2 className={styles.title}>HELADERIA JUCHIMAN</h2>
        </div>
        <div className={styles.conlink}>
          <Link href={"/Inventario"} className={styles.link}>
            Helado🍨
          </Link>
          <Link href={"/Recipiente"} className={styles.link}>
            Recipiente🍦
          </Link>
          <Link href={"/Empleado"} className={styles.link}>
            Empleado👨‍💻
          </Link>
          <Link href={"/Promo"} className={styles.link}>
            Promociones🎁
          </Link>
          <Link href={"/Caja"} className={styles.link}>
            Ventas💰
          </Link>
          <Link href={"/Ajuste"} className={styles.link}>
            Informacion🕹️
          </Link>
        </div>
      </nav>
    </header>
  );
}
