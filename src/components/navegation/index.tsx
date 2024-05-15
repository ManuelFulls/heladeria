import Link from "next/link";
import styles from "./navegation.module.css"; // Importa los estilos CSS

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <Link href={"/Inventario"}>
            <p className={styles.navLink}>Producto🍨</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href={"/Recipiente"}>
            <p className={styles.navLink}>Recipiente🍦</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href={"/Empleado"}>
            <p className={styles.navLink}>Empleado👨‍💻</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href={"/Promo"}>
            <p className={styles.navLink}>Promociones🎁</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
