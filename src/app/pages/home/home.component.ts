import { Component, OnInit } from '@angular/core';
//importamos ngForm
import { NgForm } from '@angular/forms';

import { Empleado } from '../../model/empleado.model';

//imortamos el servicio creado
import { EmpleadoService} from '../../services/empleado.service';
//import { CodpostalService } from '../../services/codpostal.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{

  /*paises = [{id: 1,nombre: 'México',estado:'Tlaxcala', municipio: 'Apizaco'}

]*/

  localidades = [];
  products: Array<object> = [];

  constructor(public empleadoService: EmpleadoService, private httpClient: HttpClient) {}

  ngOnInit(){
   //inicializamos el servicio para crear el arreglo que contendra los datos del Formulario
   this.empleadoService.getEmpleados();//manda a traer los datos medianteel servicio desde firebase
   this.resetForm();
  }

  //Mandar formulario: se pasa como parametro el formulario que se creado
  onSubmit(FormEmpleado: NgForm){
    //insertamos el nuevo empleado mediante el servicio
    this.empleadoService.insertEmpleado(FormEmpleado.value);
    this.resetForm(FormEmpleado);//recibe el formulario para despues limpiarlo
  }

  resetForm(FormEmpleado?: NgForm){ //mediante ? indicamos que FormEmpleado puede ser opcional
    if (FormEmpleado != null){
      FormEmpleado.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }

  getInfoCp(){
    var cp = this.empleadoService.selectedEmpleado.cp;
    var url = 'https://api-sepomex.hckdrk.mx/query/info_cp/';
    this.httpClient.get(url+cp).subscribe(data =>{
       //console.log(data);
       //console.log(data[0].response);
       //this.products = data;

       for (let i in data) {
         //console.log(data[i].response);
         this.products = data[i].response;
         console.log(this.products);
      }

     })
  }

}
