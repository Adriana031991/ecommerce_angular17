import { Component, inject } from '@angular/core';
import { ProductStateService } from '@features/services/product-state.service';
import { ProductsService } from '@features/services/products.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  productsState = inject(ProductStateService)

}
