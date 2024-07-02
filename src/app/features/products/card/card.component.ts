import { Component, input } from '@angular/core';
import { Product } from '@features/models/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  product = input.required<Product>();
}
