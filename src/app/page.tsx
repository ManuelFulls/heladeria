import Image from "next/image";
import styles from "./page.module.css";
import { MdiFacebook, Instagram, Tiktok } from "@/components/icons";
import Social from "@/components/social-link";
import pictures from "../assets/img/Cono.jpg";
import { Header } from "@/components/Header";
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div>
        <div className={styles.contenedorE}>
          <h2 className={styles.eslogan}>"MOMENTOS DE PLACER"</h2>
        </div>
        <div className={styles.contenedor}>
          <div className={styles.conteTitulo}>
            <h1 className={styles.titulo}>
              DESCRUBRE LOS PRODUCTOS QUE TENEMOS PARA TI
            </h1>

            <div className={styles.social}>
              <Social url={"#"} title={"HeladitosWeb"} icon={MdiFacebook} />
              <Social url={"#"} title={"HeladitosWeb"} icon={Instagram} />
              <Social url={"#"} title={"HeladitosWeb"} icon={Tiktok} />
            </div>
          </div>
          <div className={styles.conteImg}>
            <Image src={pictures} alt="numa" className={styles.imagen} />
          </div>
        </div>
      </div>
    </main>
  );
}
