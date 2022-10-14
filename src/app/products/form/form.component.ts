import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public form!: FormGroup;

  constructor(private readonly fb: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      unitPrice: [''],
      unitsInStock: ['']
    });
    
  }

  saveProduct(){
   /* var product = new Product();
    product.ProductName = this.form.get('name').value;
    product.ProductName = this.form.get('unitPrice').value;
    product.ProductName = this.form.get('unitsInStock').value;

    this.productService.createProduct(product).subscribe(res => {
      this.form.reset();
      alert("se guardo el producto");

    })*/;

  }

  onSubmit() : void {
    
  }

  onClickClean():void {
    this.form.reset();
  }
}
