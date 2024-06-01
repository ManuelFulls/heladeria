'use server'
 
import { DB } from '@/lib/mysql';
import { redirect, useRouter } from 'next/navigation'
 
export async function validarEmpleado(data: FormData) {
    const router = useRouter()
    "use server";
    const usuario: Partial<Empleado> = {
      matricula: data.get("matricula") as string,
      password: data.get("password") as string,
    };
    const resultado = await DB.buscarEmpleado(usuario);
    try {
      if (resultado === null || resultado === undefined) {
        console.log("Usuario no valido");
      } else {
        router.push("/")
      }
    } catch (error) {
      console.log(error);
    }
  }