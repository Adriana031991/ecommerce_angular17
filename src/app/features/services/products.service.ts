import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '@features/models/product.interface';
import { Observable } from 'rxjs';

const LIMIT = 5;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _http = inject(HttpClient)
  private _url: string = 'https://fakestoreapi.com';
  constructor() { }

  getProducts(page: number): Observable<Product[]> {
    return this._http.get<Product[]>(`${this._url}/products?sort=desc`, {
      params: {
        limit: page * LIMIT,
      },
    });
  }

  getProductById(id: string): Observable<Product> {
    return this._http.get<Product>(`${this._url}/${id}`);
  }
}
