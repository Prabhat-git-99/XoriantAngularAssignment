import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  apiUrl = 'http://localhost:3000/products';
  constructor(private http:HttpClient) { }

  fetchAllProduct( ):Observable<Product[ ]> {

    return this.http.get<Product[ ]>(this.apiUrl)

  }

  createProduct(data:any ):Observable<Product[ ]> {
    
    return this.http.post<Product[ ]>(this.apiUrl, data)

  }

  getSingleProduct( id:number ):Observable<Product> {

    return this.http.get<Product>(`${this.apiUrl}/${id}`);

  }

  updateProduct( id:number, data: any ): Observable<Product> {

    return this.http.put<Product>(`${this.apiUrl}/${id}`, data);

  }

  deleteProduct( id:number ): Observable<void> {

    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  
  }

}
