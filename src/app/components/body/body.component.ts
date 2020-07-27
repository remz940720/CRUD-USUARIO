import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/datos';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() usuario: Usuario;
  constructor(public datos:DatosService) { }

  ngOnInit(): void {
  }



}
