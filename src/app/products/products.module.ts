import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
