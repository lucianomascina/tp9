import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public list: Array<Product> = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.productService.getProducts().subscribe(res => {
    this.list = res;
    
  });

  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(res => {
      alert("producto borrado correctamente");
      
    });
  }
}
