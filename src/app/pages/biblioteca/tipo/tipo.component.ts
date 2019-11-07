import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {
  public titulo = "Formulario de Tipo";
  public codigo: String;
  public Nombre: string;
  public Referencia: string;

  constructor() { }

  ngOnInit() {
  }
  SaveForm (){
    
  }

}
