import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  public titulo = "Formulario de Autores";
  //1er paso declarar
  public autorForm: FormGroup;
 
//2do paso
  constructor(protected fb:FormBuilder) {
this.createForm();
   }

  ngOnInit() {
    
  }
  //3er paso crear formularios
  createForm(){
    this.autorForm= this.fb.group (
      {
        code: ['', ],
        name: '',
        lastname: '',
        bd_year: '',
        deaath_year: '',
        bd_place: ''
      });
  }

  //SaveForm (){
    
  

}
