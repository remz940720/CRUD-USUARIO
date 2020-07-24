import { Component, OnInit } from '@angular/core';

import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(
    public userService: DatosService
  ) { }

  ngOnInit(): void {
  }

  agregarNombre(newNombre,newApellido,newCorreo){
    console.log('Agragando Nombre',newNombre.value,newApellido.value);
    this.userService.addUsuario({
      Nombre: newNombre.value,
      Apellido: newApellido.value,
      Correo: newCorreo.value,
      Oculto: true

    });
    newNombre.value='';
    newApellido.value='';
    newCorreo.value='';
    newNombre.focus();
    return false;
  }

}
