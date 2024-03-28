import Image from "next/image";
import styles from "./page.module.css";
import { MdiFacebook, Instagram, Tiktok } from "@/components/icons";
import Social from "@/components/social-link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.contenedorE}>
          <h2 className={styles.eslogan}>"MOMENTOS DE PLACER"</h2>
        </div>
        <div className={styles.contenedor}>
          <div className={styles.conteTitulo}>
            <h1 className={styles.titulo}>
              DESCRUBRE LOS PRODUCTOS QUE TENEMOS PARA TI
            </h1>
            <button className={styles.boton}>Explora</button>
            <div className={styles.social}>
              <Social url="#" title="Jesus50056" icon={MdiFacebook} />
              <Social url="#" title="Jesus50056" icon={Instagram} />
              <Social url="#" title="Jesus50056" icon={Tiktok} />
            </div>
          </div>
          <div className={styles.conteImg}>
            <img
              src="https://img.freepik.com/fotos-premium/helado-fresa_732812-2165.jpg"
              alt=""
              className={styles.imagen}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
