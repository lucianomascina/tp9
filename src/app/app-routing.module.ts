import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './categories/category/category.component';
import { UpdateComponent } from './categories/category/update/update.component';
import { MainComponent } from './products/main/main.component';


const routes: Routes = [
  {
    path : '',
    component : CategoryComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  } 
  {
    path: 'products',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
