import Link from "next/link";
import styles from "./social-link.module.css";
interface Props {
  url: string;
  title: string;
  icon: () => JSX.Element;
  //   el icon:() se utilizo para poder usar los iconos svg
  // y poder mandarlos a llamar para ser utilizados
}
// el icon:Icon es para renombre y que el nombre
// sea "Icon"
const Social = ({ url, title, icon: Icono }: Props) => {
  return (
    <Link className={styles.iconos} href={url} target="blanck" title={title}>
      <Icono />
    </Link>
  );
};

export default Social;
