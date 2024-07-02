import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EcommerceComponent } from '@shared/layout/ecommerce/ecommerce.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EcommerceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esv-ecommerce';
}
