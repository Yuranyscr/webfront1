import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {
  public titulo = "Formulario Editorial";
  public id_edi: String;
  public lugar: string;
  public fec_edi: string;
  public pais: string;bloc

  constructor() { }

  ngOnInit() {
  }
  SaveForm (){
    
  }

}
