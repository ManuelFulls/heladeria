"use client";

import { useEffect, useState, ChangeEvent } from "react";
import VistaProductos from "@/components/vista-productos";
import { Header } from "@/components/Header";
import {
  getEnvases,
  getHeladosAgua,
  getHeladosCrema,
  getPaletaAgua,
  getPaletaCrema,
  getPromo,
} from "./api";

/***
 * 
 * interface Producto {
  id_producto: number;
  nombre: string;
  tipo: string;
  precio: number;
  sabor: string;
  cantidad: number;
  estado: string;
  imagen: string;
}

interface Envase {
  id_envase: number;
  nombre: string;
}
 * 
 */

export default function IceCreamMenu() {
  const [heladoA, setProducto1] = useState<Producto[]>([]);
  const [heladoC, setProducto2] = useState<Producto[]>([]);
  const [paletaA, setProducto3] = useState<Producto[]>([]);
  const [paletaC, setProducto4] = useState<Producto[]>([]);
  const [envases, setEnvases] = useState<Envase[]>([]);
  const [promocion, setPromociones] = useState<Promocion[]>([]);
  useEffect(() => {
    async function fetchProductos() {
      try {
        const producto1 = await getHeladosAgua();
        const producto2 = await getHeladosCrema();
        const producto3 = await getPaletaAgua();
        const producto4 = await getPaletaCrema();
        const envases = await getEnvases();
        //***** */
        const promociones = await getPromo();
        //**** */
        setProducto1(producto1);
        setProducto2(producto2);
        setProducto3(producto3);
        setProducto4(producto4);
        setEnvases(envases);

        /** */
        setPromociones(promociones);
        /** */
      } catch (error) {
        console.log("Error al obtener los productos", error);
      }
    }
    fetchProductos();
  }, []);

  const agregarAlCarrito = (producto: Producto, envaseId: number) => {
    const envase = envases.find((enva) => enva.id_envase === envaseId);
    const envaseNombre = envase ? envase.nombre : null;
    const costoEnvase =
      envaseNombre === "vaso chico"
        ? 20
        : envaseNombre === "vaso mediano"
        ? 30
        : envaseNombre === "vaso grande"
        ? 50
        : 0;

    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

    const productoConEnvase = {
      ...producto,
      envase: envaseNombre,
      total: producto.precio + costoEnvase,
    };

    carrito.push(productoConEnvase);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  const ProductoComponent = ({
    helado,
    showComboBox,
  }: {
    helado: Producto;
    showComboBox: boolean;
  }) => {
    const [productoSelect, setProductoSelect] = useState<string>(
      envases[0]?.id_envase.toString() || "1"
    );
    const [precioTotal, setPrecioTotal] = useState<number>(helado.precio);

    useEffect(() => {
      const envase = envases.find(
        (enva) => enva.id_envase === parseInt(productoSelect)
      );
      const costoEnvase =
        envase?.nombre === "vaso chico"
          ? 20
          : envase?.nombre === "cono"
          ? 15
          : envase?.nombre === "vaso mediano"
          ? 30
          : envase?.nombre === "vaso grande"
          ? 50
          : 0;

      setPrecioTotal(costoEnvase);
    }, [productoSelect, helado.precio, envases]);

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setProductoSelect(event.target.value);
    };

    return (
      <div className="helado" key={helado.id_producto}>
        <h2>{helado.sabor}</h2>
        <img
          src={helado.imagen}
          alt={helado.nombre}
          width={200}
          height={260}
          className="imagen-helado"
        />
        <div className="detalles-helado">
          <h3>$ {precioTotal}</h3>
          {showComboBox && (
            <select
              id="productoSelect"
              name="id_producto"
              value={productoSelect}
              onChange={handleSelectChange}
            >
              {envases.map((enva) => (
                <option key={enva.id_envase} value={enva.id_envase.toString()}>
                  {enva.nombre}
                </option>
              ))}
            </select>
          )}
          <button
            className="boton"
            onClick={() => agregarAlCarrito(helado, parseInt(productoSelect))}
          >
            Elegir
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <section className="helados-de-crema">
        <h1 className="titulo-seccion">Helados de Agua</h1>
        <div className="lista-helados">
          {heladoA.map((helado) => (
            <ProductoComponent
              key={helado.id_producto}
              helado={helado}
              showComboBox={true}
            />
          ))}
        </div>
      </section>
      <section className="helados-de-crema">
        <h1 className="titulo-seccion">Helados de Crema</h1>
        <div className="lista-helados">
          {heladoC.map((helado) => (
            <ProductoComponent
              key={helado.id_producto}
              helado={helado}
              showComboBox={true}
            />
          ))}
        </div>
      </section>
      <section className="helados-de-crema">
        <h1 className="titulo-seccion">Paletas de Agua</h1>
        <div className="lista-helados">
          {paletaA.map((helado) => (
            <ProductoComponent
              key={helado.id_producto}
              helado={helado}
              showComboBox={false}
            />
          ))}
        </div>
      </section>
      <section className="helados-de-crema">
        <h1 className="titulo-seccion">Paletas de Crema</h1>
        <div className="lista-helados">
          {paletaC.map((helado) => (
            <ProductoComponent
              key={helado.id_producto}
              helado={helado}
              showComboBox={false}
            />
          ))}
        </div>
      </section>
    </>
  );
}
