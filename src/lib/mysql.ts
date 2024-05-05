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




// SELECCIONAR PRODUCTOS
export class DB {
  static async getProducts() {
    const QUERY = `SELECT * FROM producto`
    const products = await ConnectionPool.query(QUERY)
    return products as Producto[]
  }


  //INSERT PRODUCTOS
  static async insertProduct({nombre, tipo, precio, tipo_envase, sabor, cantidad}: Partial<Producto>){
   try {
    const QUERY = `INSERT INTO producto ( nombre, tipo, precio, tipo_envase, sabor, cantidad) values (?,?,?,?,?,?,?)`
    await ConnectionPool.query(QUERY,[ nombre, tipo, precio, tipo_envase, sabor, cantidad] )
    return true
   } catch (error) {
    return false
   }
  }


  //INSERT 
  static async getProductById(id: number){
    const QUERY = `SELECT * FROM producto where id_producto=?`
    const productos = await ConnectionPool.query(QUERY, [id]) as any
    return productos[0] as Producto 
  }
  
  //MODIFICAR PRODUCTOS
  static async updateProduct({id_producto ,nombre, tipo, precio, tipo_envase, sabor, cantidad}: Partial<Producto>){
    try {
      const QUERY = `UPDATE producto 
      SET nombre = ?, tipo = ?, precio = ?, tipo_envase = ?, sabor = ?, cantidad = ?
      WHERE id_producto = ?`;
     await ConnectionPool.query(QUERY,[nombre, tipo, precio, tipo_envase, sabor, cantidad, id_producto] )
     return true
    } catch (error) {
     return false
    }
   }
      //INSERT EMPLEADOS
      static async insertUser({matricula, nombre, contraseña, telefono}: Partial<Empleado>){
       try {
        const QUERY = `INSERT INTO empleado (matricula, nombre, contraseña, telefono) values (?,?,?,?)`
        await ConnectionPool.query(QUERY,[matricula, nombre, contraseña, telefono])
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
          const QUERY = `INSERT INTO promocion`
        } catch (error) {
          return false
          
        }
      }
      //INSERT ENVASE
      static async insertEnvase({id_envase, nombre}: Partial<Envase>){

        try {
          const QUERY = `INSERT INTO envase (id_envase, nombre) VALUES (?,?)`
          await ConnectionPool.query(QUERY,[id_envase, nombre])
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
      static async insertProductCar({cantidad}: Partial<Producto>, {fecha}:Partial <Carrito>){
        try {
         const QUERY = `INSERT INTO carrito (id_producto, fecha) values (?,?)`
         await ConnectionPool.query(QUERY,[ cantidad, fecha] )
         return true
        } catch (error) {
         return false
        }
       }

      // VERIFICAR CREDENCIALES DE EMPLEADO
      static async buscarEmpleado({ matricula, contraseña }: Partial<Empleado>) {
        try {
          const QUERY = `SELECT * FROM empleado WHERE matricula = ? AND contraseña = ?`;
          const empleado = await ConnectionPool.query(QUERY, [matricula, contraseña]) as any;
          return empleado[0] ;
        } catch (error) {
          return false;
        }
}

     
}




