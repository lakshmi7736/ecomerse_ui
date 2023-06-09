import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';
import { Category } from '../_model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient:HttpClient
  ) { }
  public addCategory(category:FormData){
    return this.httpClient.post<Category>("http://localhost:9090/addNewCategory",category)
  }
  public getAllCategories(){
    return this.httpClient.get<Category>("http://localhost:9090/getAllCategories");
}

public deleteCategory(categoryId:number){
  return this.httpClient.delete("http://localhost:9090/deleteCategoryDetails/"+categoryId);
}

public getProductDetailsById(categoryId:number){
  return this.httpClient.get<Product>("http://localhost:9090/getCategoryDetailsById/"+categoryId);

}

}
