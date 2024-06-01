"use client";

import Navigation from "@/components/navegation/index";
import styles from "./Ajuste.module.css";
import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import { EditForm } from "./api";
import settingUser from "./api";
import { useRouter } from "next/navigation";
export default function Ajuste() {
  const [formState, setFormState] = useState({
    nombre: "",
    password: "",
    telefono: "",
  });

  const { nombre, password, telefono } = formState;

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  /**************************** */

  const [empleado, setEmpleado] = useState<Empleado>(); // Especifica el tipo inicial como un array de Envase

  /********************************************************************++ */
  useEffect(() => {
    async function fetchEmpleado() {
      try {
        //   const empleado = await settingUser(empleado1); // Llama a la función api para obtener los envases
        setEmpleado(empleado as any); // Actualiza el estado envases con los datos obtenidos

        setFormState({
          nombre: "jesus",
          password: "12345",
          telefono: "987654321",
        });
      } catch (error) {
        console.error("Error al obtener los envases:", error);
      }
    }
    fetchEmpleado(); // Llama a la función fetchEnvases al montar el componente
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  //****************************************************************** */

  const handleEditClick = () => {
    if (empleado) {
      setFormState({
        nombre: "jesus",
        password: "12345",
        telefono: "987654321",
      });
    }
  };

  {
    /****

 const handleEditClick = async (empleado: Empleado) => {
    setFormState({
      nombre: empleado.nombre,
      password: empleado.password,
      telefono: empleado.telefono.toString(),
    });
  };

*/
  }

  //******************************************************** */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await EditForm(formData);
    } catch (error) {
      console.error("Error al procesar el formulario:", error);
    }
  };
  const router = useRouter();

  return (
    <>
      <Navigation />
      <h1 className={styles.titulo}>Información de la Cuenta👨‍💻</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.nombre}>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={onInputChange}
          disabled
        />

        <label className={styles.password}>Password</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={onInputChange}
          disabled
        />

        <label className={styles.telefono}>Telefono</label>
        <input
          type="text"
          name="telefono"
          value={telefono}
          onChange={onInputChange}
          disabled
        />

        {/***
         * 
           <button
          type="submit"
          className={styles.boton}
          onClick={() => handleEditClick}
        >
          Editar
        </button>
        <button type="submit" className={styles.boton}>
          Guardar
        </button>
         */}

        <button
          type="submit"
          className={styles.boton}
          onClick={() => router.push("/Admin")}
        >
          Salir
        </button>
      </form>
    </>
  );
}
