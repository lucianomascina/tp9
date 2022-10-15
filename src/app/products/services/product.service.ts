import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endpoint: string = 'product/'; 

  constructor(private http: HttpClient) { }

  public createProduct(productRequest: Product): Observable<any>{
     let url =environment.api + this.endpoint;
    return this.http.post(url,productRequest);

  }

  public getProducts(): Observable<Array<Product>>{
    let url =environment.api + this.endpoint;
    return this.http.get<Array<Product>>(url);
  }

  public deleteProduct(id:number): Observable<any>{
    let url =environment.api + this.endpoint + id;
    return this.http.delete(url);
  } 

 public updateProduct(productRequest: Product): Observable<any>{
    let url =environment.api + this.endpoint;
   return this.http.put(url,productRequest);

 }

}
