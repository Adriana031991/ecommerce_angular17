import { Component, effect, inject, input } from '@angular/core';
import { ProductStateService } from '@features/services/product-state.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  // productId = input<number>(0, { alias: 'id' })

  productDetailState = inject(ProductStateService).stateDetail;
  // cartState = inject(CartStateService).state;

  id = input.required<string>();

  constructor() {
    effect(() => {
      this.productDetailState.getById(this.id());
    });
  }

  // addToCart() {
  //   this.cartState.add({
  //     product: this.productDetailState.product()!,
  //     quantity: 1,
  //   });
  // }
}
