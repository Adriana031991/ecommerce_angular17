import { inject, Injectable } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from './products.service';
import { Product } from '@features/models/product.interface';
import { map } from 'rxjs';

interface State {
  products: Product[],
  loaded: boolean,
  error: null,
}


@Injectable({
  providedIn: 'root'
})
export class ProductStateService {
  prodService = inject(ProductsService);


  private initialState: State = {
    products: [],
    loaded: false,
    error: null,
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.prodService.getProducts().pipe(map(products => ({ products, loaded: true, error: null })))
    ]
  });
}
