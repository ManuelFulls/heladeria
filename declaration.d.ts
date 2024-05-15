export declare global {
    interface Empleado {
      matricula: String
      nombre: string
      contraseña: string
      telefono: number
    }
    interface Carrito {
      id_carrito: number
      fecha: Date
      id_producto: number
    }
    interface Envase{
        id_envase: number
        nombre: string 
        cantidad: number
        fecha: Date
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
      tipo_envase: number
      sabor: string
      cantidad: number
      estado: string
      imagen: string
      fecha: Date
    
    }
    interface Promocion{
      id_promocion: number
      tipo_promocion: string
      descripcion: string 
      id_producto: number
      precio_especial: number
      fecha_inicio: Date
      fecha_fin: Date

    }
  
  }
  