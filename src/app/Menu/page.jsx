import VistaProductos from '@/components/vista-productos'


const heladosDeCrema = [
  {
    id: 'helado-crema-vainilla',
    imagen: "/helados/vainilla.jpg",
    texto: "Helado de Vainilla",
    precio: 19.99
  },
  {
    id: 'helado-crema-fresa',
    imagen: "/helados/fresa.jpg",
    texto: "Helado de Fresa",
    precio: 19.99
  },
  {
    id: 'helado-crema-chocolate',
    imagen: "/helados/chocolate.jpg",
    texto: "Helado de Chocolate",
    precio: 19.99
  },
  {
    id: 'helado-crema-maracuya',
    imagen: "/helados/maracuya.jpg",
    texto: "Helado de Maracuya",
    precio: 19.99
  },
];

const heladosDeAgua = [
  {
    id: 'helado-agua-vainilla',
    imagen: "/helados/vainilla.jpg",
    texto: "Helado de Vainilla",
    precio: 19.99
  },
  {
    id: 'helado-agua-fresa',
    imagen: "/helados/fresa.jpg",
    texto: "Helado de Fresa",
    precio: 19.99
  },
  {
    id: 'helado-agua-chocolate',
    imagen: "/helados/chocolate.jpg",
    texto: "Helado de Chocolate",
    precio: 19.99
  },
  {
    id: 'helado-agua-maracuya',
    imagen: "/helados/maracuya.jpg",
    texto: "Helado de Maracuya",
    precio: 19.99
  },
];

const Nieves =[
  {
    id: 'nieve1',
    imagen: "/nieves/nieve1.jpg",
    texto: "Napolitano",
    precio: 19.99
  },

  {
    id: 'nieve2',
    imagen: "/nieves/nieve2.jpg",
    texto: "Fresa",
    precio: 19.99
  },

  {
    id: 'nieve3',
    imagen: "/nieves/nieve3.jpg",
    texto: "Menta",
    precio: 19.99
  },

  {
    id: 'nieve4',
    imagen: "/nieves/nieve4.webp",
    texto: "Mango",
    precio: 19.99
  },
]



export default function IceCreamMenu() {
  return (
    <>
      <VistaProductos titulo="HELADOS DE CREMA" lista={heladosDeCrema} />
      <VistaProductos titulo="HELADOS DE AGUA" lista={heladosDeAgua} />
      <VistaProductos titulo = "NIEVES" lista={Nieves}/>
    </>
  );
}
