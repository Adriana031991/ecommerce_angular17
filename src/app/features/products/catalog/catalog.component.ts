import { Component, inject } from '@angular/core';
import { ProductStateService } from '@features/services/product-state.service';
import { ProductsService } from '@features/services/products.service';
import { CardComponent } from '../card/card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { Product } from '@features/models/product.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CardComponent, PaginationComponent, JsonPipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  productsState = inject(ProductStateService)
  // changePage() {
  //   this.productsState.changePage$.next(this.productsState.state.page + 1)
  // }
  // productToBeAdded: signal<Product>()
}
