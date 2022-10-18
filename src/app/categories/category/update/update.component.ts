import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!: number;
  public form!: FormGroup;
  category = new Category;

  constructor(private readonly fb: FormBuilder, private categoryService: CategoryService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCategory();
    this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      name: [this.category.CategoryName,[Validators.required, Validators.maxLength(15)]],
      description: [this.category.Description]
    });
  }

  getCategory(){
    this.categoryService.getCategory(this.id).subscribe(res => {
      this.category = res;
  
    })
    
  }

  updateCategory(){
    
     this.category.CategoryName = this.form.get('name')!.value;
     this.category.Description = this.form.get('description')!.value;
  
     this.categoryService.updateCategory(this.category).subscribe(res => {
       
       alert("categoria modificada correctamente");
       
     });
  }

  get controls() { return this.form.controls; }

  onClickClean():void {
    this.form.reset();
  }
}
