import { inject, Injectable } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from './products.service';
import { Product } from '@features/models/product.interface';
import { catchError, map, Observable, of, startWith, Subject, switchMap } from 'rxjs';

interface State {
  products: Product[],
  loaded: boolean,
  error: null,
  page: number
}
interface DetailState {
  product: Product | null,
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
    page: 1
  };

  private initialDetailState: DetailState = {
    product: null,
    loaded: false,
    error: null,
  };

  changePage$ = new Subject<number>();

  loadProducts$ = this.changePage$.pipe(
    startWith(1),
    switchMap((page) => this.prodService.getProducts(page)),
    map((products) => ({ products, loaded: true, error: null })),
    // catchError((error) => {
    //   return of({
    //     products: [],
    //     loaded: false,
    //     error
    //   });
    // }),
  );

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.changePage$.pipe(map(page => ({ page, loaded: true }))),
      // this.prodService.getProducts(1).pipe(map(products => ({ products, loaded: true, error: null })), catchError((error) => { return of({ products: [], loaded: false, error }) }))
      this.loadProducts$,
    ]
  });

  stateDetail = signalSlice({
    initialState: this.initialDetailState,
    actionSources: {
      getById: (_state, $: Observable<string>) =>
        $.pipe(
          switchMap((id) => this.prodService.getProductById(id)),
          map((data) => ({ product: data, loaded: true, error: null })),
        ),
    },
  })

}
