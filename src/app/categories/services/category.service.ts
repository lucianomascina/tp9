import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  endpoint: string = 'category/'; 

  constructor(private http: HttpClient) { }

  public createCategory(categoryRequest: Category): Observable<any>{
     let url = environment.api + this.endpoint;
    return this.http.post(url,categoryRequest);

  }

  public getCategories(): Observable<Array<Category>>{
    let url = environment.api + this.endpoint + "categories";
    return this.http.get<Array<Category>>(url);
    
  }

  public deleteCategory(id:number): Observable<any>{
    let url = environment.api + this.endpoint + id;
    return this.http.delete(url);
  } 

 public updateCategory(categoryRequest: Category): Observable<any>{
    let url = environment.api + this.endpoint;
    return this.http.put(url,categoryRequest);

 }

 public getCategory(id: number): Observable<Category>{
    let url = environment.api + this.endpoint + id;
    
    return this.http.get<Category>(url);

  }

}
