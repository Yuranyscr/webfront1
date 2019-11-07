import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  public titulo = "Formulario de Libro";
  public Libro: String;
  public Clasificacion: string;
  public Folio: string;
  public Edicion: string;bloc

  constructor() { }

  ngOnInit() {
  }
  SaveForm (){
    
  }

}
