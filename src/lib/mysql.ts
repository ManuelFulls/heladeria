// db.js

import { createConnection } from 'mysql2/promise'

const connection = createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
})


class ConnectionPool {
  static async query(sql: string, values?: any) {
    const x = await connection
    const [rows] = await x.execute(sql, values)
    return rows
  }
}





export class DB {




// SELECCIONAR PRODUCTOS
  static async getProducts() {
    const QUERY = `SELECT * FROM producto`
    const products = await ConnectionPool.query(QUERY)
    return products as Producto[]
  }



  //SELECCIONAR ENVASES
  static async getEnvases(){
    const QUERY = `SELECT * FROM envase`
    const envases = await ConnectionPool.query(QUERY)
    return envases as Envase[]
  }

  //SELECCIONAR PROMOCIONES
  static async getPromociones(){
    const QUERY = `SELECT * FROM promocion`
    const promociones = await ConnectionPool.query(QUERY)
    return promociones as Promocion[]
  }

  //INSERT PRODUCTOS
  static async insertProduct({id_producto, nombre, tipo, precio, sabor, cantidad, estado, imagen, fecha}: Partial<Producto>){
   try {
    const QUERY = `INSERT INTO producto (id_producto, nombre, tipo, precio, sabor, cantidad, estado, imagen, fecha) values (?,?,?,?,?,?,?,?,?)`
    await ConnectionPool.query(QUERY,[ id_producto, nombre, tipo, precio, sabor, cantidad, estado, imagen, fecha ] )
    return true
   } catch (error) {
    return false
   }
  }

  //BUSCAR EL ID DEL ULTIMO REGISTRO EN LA BASE DE DATOS
  static async lastIdProduct(): Promise<number | null> {
    try {
      const QUERY = `SELECT id_producto FROM producto ORDER BY id DESC LIMIT 1`;
      const result: any = await ConnectionPool.query(QUERY);
      if (result && result.length > 0) {
        return result[0].id; // Devuelve solo el ID del primer resultado
      } else {
        return null; // o cualquier otro valor que desees devolver si no hay resultados
      }
    } catch (error) {
      console.error("Error al obtener el último ID del producto:", error);
      throw error; // Propaga el error para que pueda ser manejado en otro lugar si es necesario
    }
  }


  //SELECT PRODUCTOS 
  static async getProductById(id: number){
    const QUERY = `SELECT * FROM producto where id_producto=?`
    const productos = await ConnectionPool.query(QUERY, [id]) as any
    return productos[0] as Producto 
  }
  
 



  //MODIFICAR PRODUCTOS
  static async updateProduct({id_producto ,nombre, tipo, precio, sabor, cantidad, estado, imagen, fecha}: Partial<Producto>){
    try {
      const QUERY = `UPDATE producto 
      SET nombre = ?, tipo = ?, precio = ?, sabor = ?, cantidad = ?, estado = ?, imagen = ?, fecha = ?
      WHERE id_producto = ?`;
     await ConnectionPool.query(QUERY,[nombre, tipo, precio, sabor, cantidad, estado, imagen, fecha, id_producto] )
     return true
    } catch (error) {
     return false
    }
   }


     
  //MODIFICAR ENVASES
  static async updateEnvase({id_envase, nombre, cantidad, fecha}: Partial<Envase>){
    try {
      const QUERY = `UPDATE envase 
      SET nombre = ?, cantidad = ?, fecha = ?
      WHERE id_envase = ?`;
     await ConnectionPool.query(QUERY,[nombre, cantidad, fecha, id_envase] )
     return true
    } catch (error) {
     return false
    }
   }

   //MODIFICAR PROMOCIONES
   static async updatePromo({ 
    id_promocion,
    tipo_promocion,
    descripcion,
    id_producto,
    precio_especial,
    fecha_inicio,
    fecha_fin
}: Partial<Promocion>){
    try {
      const QUERY = `UPDATE promocion 
      SET tipo_promocion = ?, descripcion = ?, id_producto = ?, precio_especial = ?, fecha_inicio = ?, fecha_fin = ?
      WHERE id_promocion = ?`;
     await ConnectionPool.query(QUERY,[ 
      tipo_promocion,
      descripcion,
      id_producto,
      precio_especial,
      fecha_inicio,
      fecha_fin,
      id_promocion] )
     return true
    } catch (error) {
     return false
    }
   }




 
   //ELIMINAR UN REGISTRO ENVASES
   static async deleteEnvase({id_envase}: Partial<Envase>) {
    try {
      const QUERY = `DELETE FROM envase where id_envase=?`;
      await ConnectionPool.query(QUERY,[id_envase])
      return true
    } catch (error) {
      return false
      
    }
   }
 

    //ELIMINAR UN REGISTRO PRODUCTOS
   static async deleteProdructo({id_producto}: Partial<Producto>) {
    try {
      const QUERY = `DELETE FROM producto where id_producto=?`;
      await ConnectionPool.query(QUERY,[id_producto])
      return true
    } catch (error) {
      return false
      
    }
   }

  //ELIMINAR UN REGISTRO EN PROMOCIONES
  static async deletePromocion({id_promocion}: Partial<Promocion>) {
    try {
      const QUERY = `DELETE FROM promocion where id_promocion=?`;
      await ConnectionPool.query(QUERY,[id_promocion])
      return true
    } catch (error) {
      return false
      
    }
  }



   
   

      //INSERT EMPLEADOS
      static async insertEmpleado({matricula, nombre, password, telefono}: Partial<Empleado>){
       try {
        const QUERY = `INSERT INTO empleado (matricula, nombre, password, telefono) values (?,?,?,?)`
        await ConnectionPool.query(QUERY,[matricula, nombre, password, telefono])
        return true
       } catch (error) {
        return false
       }
      }


      //INSERT PROMOCIONES 
      static async insertPromotion({id_promocion, tipo_promocion, descripcion, id_producto, precio_especial,
        fecha_inicio, fecha_fin
      }:Partial<Promocion>){
        try {
          const QUERY = `INSERT INTO promocion (id_promocion, tipo_promocion, descripcion, id_producto, precio_especial, fecha_inicio, fecha_fin) values (?,?,?,?,?,?,?)`
          await ConnectionPool.query(QUERY,[id_promocion, tipo_promocion, descripcion, id_producto, precio_especial,
            fecha_inicio, fecha_fin])
            return true
        } catch (error) {
          return false
          
        }
      }


      //INSERT ENVASE
      static async insertEnvase({id_envase, nombre, cantidad, fecha}: Partial<Envase>){

        try {
          const QUERY = `INSERT INTO envase (id_envase, nombre, cantidad, fecha) VALUES (?,?,?,?)`
          await ConnectionPool.query(QUERY,[id_envase, nombre, cantidad, fecha])
          return true
        } catch (error) {
          return false
          
        }
      }

      //INSERT PRODUCTOS AL INVENTARIO
      static async insertInventario({id_inventario,id_envase,id_producto,fecha, cantidad_envase,
        cantidad_producto, matricula
      }:Partial <Inventario>){
        try {
          const QUERY = `INSERT INTO inventario (id_inventario,id_envase,id_producto,fecha, cantidad_envase,
            cantidad_producto, matricula) VALUES (?,?,?,?,?,?,?)`
            await ConnectionPool.query(QUERY,[id_inventario,id_envase,id_producto,fecha, cantidad_envase,
              cantidad_producto, matricula])
              return true
        } catch (error) {
            return false
          
        }
      }

      //INSERT PRODUCTOS AL CARRITO
      static async insertProductCar( {id_carrito, fecha, id_producto, id_envase, precio_final}: any){
        try {
         const QUERY = `INSERT INTO carrito (id_producto, fecha, id_producto, id_envase, precio_final) values (?,?,?,?,?)`
         await ConnectionPool.query(QUERY,[ id_carrito, fecha, id_producto, id_envase, precio_final] )
         return true
        } catch (error) {
         return false
        }
       }

      // VERIFICAR CREDENCIALES DE EMPLEADO
      static async buscarEmpleado({ matricula, password }: Partial<Empleado>) {
        try {
          const QUERY = `SELECT * FROM empleado WHERE matricula = ? AND password = ?`;
          const empleado = await ConnectionPool.query(QUERY, [matricula, password]) as any;
          return empleado[0] ;
        } catch (error) {
          return false;
        }
}


  //ULTIMO ID DEL CARRITO DE COMPRAS
  
   // Método estático para obtener el último ID del carrito de compras
   static async lastIDCART(): Promise<number> {
    const QUERY = `SELECT MAX(id_carrito) AS lastID FROM carrito`;
    try {
      const [rows]: any = await ConnectionPool.query(QUERY);
      return rows[0].lastID || 0; // Si no hay registros, devolver 0
    } catch (error) {
      console.error('Error al obtener el último ID del carrito:', error);
      throw error;
    }
  }






   // VERIFICAR CREDENCIALES DE EMPLEADO
   static async getEmpleadoById( matricula:  number) {
    try {
      const QUERY = `SELECT * FROM empleado where matricula = ?`
      const empleado = await ConnectionPool.query(QUERY,[matricula]) as any
      return empleado[0] as Empleado
    } catch (error) {
      return false;
    }
}




       //SELECCIONAR UN EMPLEADO EL QUE USABA ANTES
        static async getEmpleadoById1(matricula: number){
          const QUERY = `SELECT * FROM empleado where matricula = ?`
          const empleado = await ConnectionPool.query(QUERY,[matricula]) as any
          return empleado[0] 
        }


       
          
    // SELECCIONAR HELADOS CREMA
      static async getHeladosCrema() {
        const QUERY = `SELECT * FROM producto where nombre = 'Helado' AND tipo = 'Crema'`
        const products = await ConnectionPool.query(QUERY)
        return products as Producto[]
      }

      // SELECCIONAR HELADOS AGUA
      static async getHeladosAgua() {
        const QUERY = `SELECT * FROM producto where nombre = 'Helado' AND tipo = 'Agua'`
        const products = await ConnectionPool.query(QUERY)
        return products as Producto[]
      }
      
      // SELECCIONAR PALETAS AGUA
      static async getPaletasAgua() {
        const QUERY = `SELECT * FROM producto where nombre = 'Paleta' AND tipo = 'Agua'`
        const products = await ConnectionPool.query(QUERY)
        return products as Producto[]
      }

       // SELECCIONAR PALETAS CREMA
       static async getPaletasCrema() {
        const QUERY = `SELECT * FROM producto where nombre = 'Paleta' AND tipo = 'Crema'`
        const products = await ConnectionPool.query(QUERY)
        return products as Producto[]
      }
     
}




