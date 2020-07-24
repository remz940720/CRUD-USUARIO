import { Component, OnInit } from '@angular/core';

import { DatosService } from '../../services/datos.service'
import { Usuario } from 'src/app/models/datos';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  usuario: Usuario[

  ];

  constructor(
    public userService: DatosService
  ) { }

  ngOnInit(): void {
    this.usuario =this.userService.getUsuario();
    console.log(this.usuario);
  }

}
