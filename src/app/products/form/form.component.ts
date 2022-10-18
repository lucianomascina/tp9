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
      name: ['',[Validators.required, Validators.maxLength(40)]],
      supplierID: [''],
      categoryID: [''],
      quantityPerUnit:['', Validators.maxLength(20)],
      unitPrice: [''],
      unitsInStock: [''],

    });
    
  }

  saveProduct(){
   var product = new Product();
    product.ProductName = this.form.get('name')!.value;
    product.SupplierID = this.form.get('supplierID')!.value;
    product.CategoryID = this.form.get('categoryID')!.value;
    product.QuantityPerUnit = this.form.get('quantityPerUnit')!.value;
    product.ProductName = this.form.get('unitPrice')!.value;
    product.ProductName = this.form.get('unitsInStock')!.value;

    this.productService.createProduct(product).subscribe(res => {
     
      alert("producto guardado correctamente");

    });

  }

  onSubmit() : void {
    
  }

  onClickClean():void {
    this.form.reset();
  }

  get controls() { return this.form.controls; }
}
