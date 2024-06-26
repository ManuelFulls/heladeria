export declare global {
    interface Empleado {
      matricula: string
      nombre: string
      password: string
      telefono: number
    }
    interface Carrito {
      id_carrito: number
      fecha: string
      id_producto: number
      id_envase: number
      precio_final: number
    }
    interface Envase{
        id_envase: number
        nombre: string 
        cantidad: number
        fecha: String
    }

    {/**Eliminar la tabla inventario */}
    interface Inventario{
        id_inventario: number
        id_envase: number
        id_producto: number
        fecha: Date
        cantidad_envase: number
        cantidad_producto: number
        matricula: number
    }

    interface Producto {
      id_producto: number
      nombre: string
      tipo: string
      precio: number
      sabor: string
      cantidad: number
      estado: string
      imagen: string
      fecha: string
    
    }
    interface Promocion{
      id_promocion: number
      tipo_promocion: string
      descripcion: string 
      id_producto: number
      precio_especial: number
      fecha_inicio: string
      fecha_fin: string

    }
  
  }
  