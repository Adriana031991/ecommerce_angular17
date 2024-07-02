import { Component } from '@angular/core';
import { NAVIGATION_LINKS } from '../../../core/config/lib/navigation';
import { FontAwesomeModule } from 'node_modules/@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.css'
})
export class EcommerceComponent {
  navigation_links = NAVIGATION_LINKS;

}
