import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorsComponent } from './authors/authors.component';
import { AreasComponent } from './areas/areas.component';
import { SectionsComponent } from './sections/sections.component';
import { BooksComponent } from './books/books.component';


const routes: Routes = [
  {
    path:'categories',
    component: CategoriesComponent
  },
  {
    path:'authors',
    component: AuthorsComponent
  },
  {
    path:'areas',
    component: AreasComponent
  },
  {
    path:'sections',
    component: SectionsComponent
  },
  {
    path:'books',
    component: BooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
