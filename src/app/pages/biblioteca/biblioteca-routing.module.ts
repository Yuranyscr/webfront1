import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorialComponent } from './editorial/editorial.component';
import { LibroComponent } from './libro/libro.component';
import { AutoresComponent } from './autores/autores.component';
import { TipoComponent } from './tipo/tipo.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { AreasComponent } from './areas/areas.component';


const routes: Routes = [
  {
    path:'editorial',
    component: EditorialComponent
  },
  {
    path:'libro',
    component: LibroComponent
  },
  {
    path:'autores',
    component: AutoresComponent
  },
  {
    path:'tipo',
    component: TipoComponent
  },
  {
    path:'existencia',
    component: ExistenciaComponent
  },
  {
    path:'areas',
    component: AreasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
