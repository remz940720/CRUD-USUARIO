import { Injectable } from '@angular/core';

import { Usuario } from '../models/datos';
import { discardPeriodicTasks } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class DatosService {
  usuario : Usuario [];
  constructor() {
    this.usuario =[
      /* {Nombre:'Eduardo', Apellido:'Munoz',Oculto: true},
      {Nombre:'Ramon', Apellido:'Zarate', Oculto: true} */
    ];
   }

   getUsuario(){

     if(localStorage.getItem('usuarios')==null){
      return this.usuario;
     }else{
       this.usuario=JSON.parse(localStorage.getItem('usuarios'));
       return this.usuario;
     }
   }

   addUsuario(user:Usuario){
     this.usuario.push(user);
     let usuarios:Usuario[]=[];
     if(localStorage.getItem('usuarios')==null){
      usuarios.push(user);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
     }else{
       usuarios = JSON.parse(localStorage.getItem('usuarios'));
       usuarios.push(user);
       localStorage.setItem('usuarios', JSON.stringify(usuarios));
     }
   }

   borrarUsuario(user:Usuario){
     for(let i=0;i<this.usuario.length;i++){
       if(user == this.usuario[i]){
         this.usuario.splice(i, 1);
         localStorage.setItem('usuarios', JSON.stringify(this.usuario));
       }
     }
   }

   actualizarUsuario(user:Usuario){
    for(let i=0;i<this.usuario.length;i++){
      if(user == this.usuario[i]){
       console.log(this.usuario[i]);
      }
    }
   }


}
