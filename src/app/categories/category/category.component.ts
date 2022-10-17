import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  public form!: FormGroup;
  public list: Array<Category> = [];

  constructor(private readonly fb: FormBuilder, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.getAll();
  }

  initForm(){
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      description: ['']
    });
  }

  saveCategory(){
    var category = new Category();
     category.CategoryName = this.form.get('name')!.value;
     category.Description = this.form.get('description')!.value;
  
     this.categoryService.createCategory(category).subscribe(res => {
       this.form.reset();
       
       alert("se guardo la categoria");
        this.getAll();
     });
 
   }
 
   getAll(){
    this.categoryService.getCategories().subscribe(res => {
    this.list = res;
    
  });

  }

  deleteCategory(id:number){
    this.categoryService.deleteCategory(id).subscribe(res => {
      alert("categoria borrada correctamente");
      this.getAll();
    },
    error => alert("no es posible borrar la categoria ya que esta asociada a otra entidad"));
  }

  updateCategory(id:number){
    this.router.navigate(["update",id]);
    
  }

  onSubmit() : void {
     
   }
 
   get controls() { return this.form.controls; }

   onClickClean():void {
     this.form.reset();
   }

}
