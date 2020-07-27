import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/datos';
import { DatosService } from '../../services/datos.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuario: Usuario;

  constructor( public datos:DatosService ) { }

  ngOnInit(): void {
  }

  borrarUsuario(usuario:Usuario){
    if(confirm('Estas seguro de querer eliminar')){
      this.datos.borrarUsuario(usuario);
    }

  }

  actualizarUsuario(usuario:Usuario){
    this.datos.actualizarUsuario(this.usuario);
  }


}
