import { Injectable } from '@angular/core';

//conexion y uso de listas en firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Empleado } from 'src/app/model/empleado.model';

@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {

  //para poder manejar cualquier tipo de dato que maneje angular
  empleadoList: AngularFireList<any>;

  //en esta clase podremos almacenar de manera temporal el dato que hemos seleccionado
  //inicializa en blanco
  selectedEmpleado: Empleado = new Empleado();

  constructor(private firebase: AngularFireDatabase) { }

  //obtener todos los empleados: asigno todo lo que obtiene desde firebase y los guargos en la coleccion empleados.
  getEmpleados(){
    this.empleadoList = this.firebase.list('empleados');
    return this.empleadoList
  }

  // inserta un nuevo registro de empleado: requiere el modelo Empleado.
  insertEmpleado (empleado: Empleado){
    //agregamos el nuevo objeto al final de la lista con push
    this.empleadoList.push({
      nombre: empleado.nombre,
      correo: empleado.correo,
      fechaNac: empleado.fechaNac,
      direccion: empleado.direccion,
      numero: empleado.numero,
      cp: empleado.cp,
      pais: empleado.pais,
      estado: empleado.estado,
      municipio: empleado.municipio
    });
  }

  //Actualizar datos del empleado:
  updateEmpleado(empleado: Empleado){
    /*buscamos en la lista y utilizamos update que necesita dos parametros:
    1ro: id del empleado, 2do: parametros a actualizar*/
    this.empleadoList.update(empleado.$key,{
      nombre: empleado.nombre,
      correo: empleado.correo,
      fechaNac: empleado.fechaNac,
      direccion: empleado.direccion,
      numero: empleado.numero,
      cp: empleado.cp,
      pais: empleado.pais,
      estado: empleado.estado,
      municipio: empleado.municipio
    });
  }

  //Eliminar empleado: pasamos como parametro la clave del producto
  deleteEmpleado($key: string){
    // indicamos que producto se quiere mover mediante el id del empleado
    this.empleadoList.remove($key);
  }

}
