import { Component, EventEmitter, input, Output, output } from '@angular/core';
import { Product } from '@features/models/product.interface';
import { StarsRatingComponent } from './stars-rating/stars-rating.component';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [StarsRatingComponent, CurrencyPipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  addToCartEvent = output<Product>()
  // @Output() addToCartEvent = new EventEmitter<Product>();
  product = input.required<Product>();

  addToCart() {
    this.addToCartEvent.emit(this.product());
  }
}
