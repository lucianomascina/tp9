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

  constructor(private readonly fb: FormBuilder, private categoryService: CategoryService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      description: ['']
    });
  }

  updateCategory(){
    var category = new Category();
    this.categoryService.getCategory(this.id).subscribe(res => {
      category = res;
    });
    
     category.CategoryName = this.form.get('name')!.value;
     category.Description = this.form.get('description')!.value;
  
     this.categoryService.updateCategory(category).subscribe(res => {
       
       alert("se modifico la categoria");
       
     });
  }

  get controls() { return this.form.controls; }

  onClickClean():void {
    this.form.reset();
  }
}
