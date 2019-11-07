import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
  public show: boolean;
  public text: string = 'abrir';
  public titulo = "Formulario de Areas";
  public nombres: String;
  public apellidos: string;
  public fec_nac: string;
  public nacionalidad: string;bloc

  constructor() {
    this.show = false;
   }

  ngOnInit() {
  }

  showAutores() {
    this.show = !this.show;
    this.show ? this.text = 'cerrar' : this.text = 'Abrir';
  }
}
