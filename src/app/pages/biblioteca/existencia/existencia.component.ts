import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existencia',
  templateUrl: './existencia.component.html',
  styleUrls: ['./existencia.component.css']
})
export class ExistenciaComponent implements OnInit {
  public titulo = "Formulario de Existencias";
  public Ide_Nombre: String;
  public Nombre: string;
  public Descripcion: string;

  constructor() { }

  ngOnInit() {
  }
  SaveForm (){
    
  }
}
