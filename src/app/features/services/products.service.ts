import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '@features/models/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _http = inject(HttpClient)
  private _url: string = 'https://fakestoreapi.com/products';
  constructor() { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._url);
  }

  getProductsById(id: string) {
    return this._http.get(`${this._url}/${id}`);
  }
}
