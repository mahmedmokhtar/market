import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatogrusService {

  constructor(private http:HttpClient) {

   }
   getall(){
    return this.http.get("https://fakestoreapi.com/products")
   }
   getcat(){
    return this.http.get('https://fakestoreapi.com/products/categories')
   }
   getAllCategories(keyword:any){
    return this.http.get("https://fakestoreapi.com/products/category/"+ keyword)
   }
   Getsingleproduct(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+ id)
   }
}
