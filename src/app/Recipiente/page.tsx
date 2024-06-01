//FORMULARIO DE RECIPIENTE
"use client";
import Navigation from "@/components/navegation/index";
import styles from "./Recipiente.module.css";
import { Edit, Delete } from "@/components/icons/index";
import { useEffect, useState } from "react";
import { api, editarForm, insertarForm, deleteForm } from "./api";
import { useRef } from "react";

import { ChangeEvent, FormEvent } from "react";
export default function Recipiente() {
  const [formState, setFormState] = useState({
    id: "",
    nombre: "",
    cantidad: "",
    fecha: "",
  });

  const formVacio = () => {
    setFormState({
      id: "",
      nombre: "",
      cantidad: "",
      fecha: "",
    });
  };

  const [accion, setAccion] = useState(""); // Estado para almacenar la acción seleccionada

  const { id, nombre, cantidad, fecha } = formState;

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [envases, setEnvases] = useState<Envase[]>([]); // Especifica el tipo inicial como un array de Envase

  const formRef = useRef<HTMLFormElement>(null); // Crear una referencia al formulario

  useEffect(() => {
    async function fetchEnvases() {
      try {
        const envasesData = await api(); // Llama a la función api para obtener los envases
        setEnvases(envasesData); // Actualiza el estado envases con los datos obtenidos
      } catch (error) {
        console.error("Error al obtener los envases:", error);
      }
    }
    fetchEnvases(); // Llama a la función fetchEnvases al montar el componente
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  //******************************************************** */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      if (accion === "boton1") {
        if (!id || !nombre || !cantidad || !fecha) {
          alert("Todos los campos son obligatorios");
        } else {
          await insertarForm(formData);
        }
      } else if (accion === "boton2") {
        if (!id || !nombre || !cantidad || !fecha) {
          alert("Todos los campos son obligatorios");
        } else {
          await editarForm(formData);
        }
      }

      //console.log(formData);

      // Vuelve a obtener la lista de envases después de agregar un nuevo envase
      const updatedEnvases = await api();
      setEnvases(updatedEnvases); // Actualiza el estado envases con los nuevos datos

      formVacio();
    } catch (error) {
      console.error("Error al procesar el formulario:", error);
    }
  };

  //****************************************************************** */

  const handleEditClick = async (envase: Envase) => {
    setFormState({
      id: envase.id_envase.toString(),
      nombre: envase.nombre,
      cantidad: envase.cantidad.toString(),
      fecha: envase.fecha.toString(),
    });
  };

  const handleDeleteClick = async (envase: Envase) => {
    try {
      const formData = new FormData();
      formData.append("id", envase.id_envase.toString());
      await deleteForm(formData);
      console.log("Registro eliminado correctamente");

      const updatedEnvases = await api();
      setEnvases(updatedEnvases);
    } catch (error) {
      console.error("Error al eliminar el registro:", error);
    }
  };
  const [contador, setContador] = useState(0);

  const clickCount = () => {
    setContador(contador + 1);
    console.log(contador);
  };

  return (
    <>
      <Navigation />
      <h1 className={styles.title}>Recipientes</h1>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <div className={styles.container_input}>
          <div className={styles.nombre}>
            <label className={styles.span1}>Id</label>
            <input
              className={styles.input1}
              type="text"
              name="id"
              onChange={onInputChange}
              value={id}
            />
          </div>
          <div className={styles.nombre}>
            <label className={styles.span1}>Nombre</label>
            <input
              className={styles.input1}
              type="text"
              name="nombre"
              onChange={onInputChange}
              value={nombre}
            />
          </div>
          <div>
            <span className={styles.span1}>Cantidad</span>
            <input
              className={styles.input1}
              type="text"
              name="cantidad"
              onChange={onInputChange}
              value={cantidad}
            />
          </div>
          <div>
            <span className={styles.span1}>Fecha</span>
            <input
              className={styles.input1}
              type="Date"
              name="fecha"
              onChange={onInputChange}
              value={fecha}
            />
          </div>
          <div>
            <button
              type="submit"
              className={styles.boton}
              onClick={() => setAccion("boton1")}
            >
              Agregar
            </button>
          </div>
          <div>
            <button
              type="submit"
              className={styles.boton}
              onClick={() => setAccion("boton2")}
            >
              Editar
            </button>
          </div>
        </div>
      </form>
      <h2 className={styles.Product}>Recipientes</h2>
      <div className="tabla">
        <table>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Fecha</th>
            <th></th>
          </tr>

          {/* Mapeo de cada uno de los productos en la tabla */}
          {envases.map((envase) => (
            <tr key={envase.id_envase}>
              <td>{envase.id_envase}</td>
              <td>{envase.nombre}</td>

              <td>{envase.cantidad}</td>
              <td>{envase.fecha}</td>
              <td className={styles.container_boton}>
                <button
                  className={styles.boton1}
                  onClick={() => handleEditClick(envase)}
                >
                  <Edit />
                </button>
                <button
                  className={styles.boton1}
                  onClick={() => handleDeleteClick(envase)}
                >
                  <Delete />
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
