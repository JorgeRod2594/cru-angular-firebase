import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../model/empleado.model';
import { EmpleadoService } from '../../services/empleado.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  empleadosList: Empleado[];
  constructor(private empleadoService: EmpleadoService,private router: Router) { }
/*  empleado: Empleado[] = [
    {id: 1, nombre: 'Juan', apellido: 'Lopez', direccion: 'Av. Revolucion', numero: 12, fechaNac: '12/07/1990', pais: 'México', estado: 'Puebla', cp: 90700}
  ];*/

  ngOnInit() {
      this.empleadoService.getEmpleados()
        .snapshotChanges().subscribe(item => {
          this.empleadosList=[];
          item.forEach(elemnt => {
            let x = elemnt.payload.toJSON();
            x["$key"] = elemnt.key;
            this.empleadosList.push(x as Empleado);
            console.log(this.empleadosList);
          })
        })

     }

  onEdit (empleado: Empleado){
    this.empleadoService.selectedEmpleado = Object.assign({}, empleado); this.router.navigate(['/home']);
  }

  onDelete ($key: string){

  }

}
