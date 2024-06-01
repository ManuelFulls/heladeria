"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.barratitle}>
          <img
            src="LOGO.png"
            alt="Logo Juchiman"
            className={styles.imagen}
            onClick={() => router.push("/Admin")}
          />
          <h2 className={styles.title}>HELADERIA JUCHIMAN</h2>
        </div>
        <div className={styles.conlink}>
          <Link href={`/`} className={styles.link}>
            Inicio
          </Link>
          <Link href={`/Promocion/`} className={styles.link}>
            Promociones
          </Link>
          <Link href={`/Menu/`} className={styles.link}>
            Menú
          </Link>
          <Link href={`/Ordenar/`} className={styles.link}>
            Ordenar
          </Link>
          <Link href={`/SobreNosotros/`} className={styles.link}>
            Sobre Nosotros
          </Link>
        </div>
      </nav>
    </header>
  );
};
