import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faStar, faStarHalf, faStarHalfAlt, faStarOfDavid, faStarOfLife } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stars-rating',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div class="flex items-center space-x-1 rtl:space-x-reverse my-2 text-xs">
      <ng-container *ngFor="let star of stars">
        <fa-icon [icon]="star.icon" 
        [ngClass]="{
          'text-yellow-300': star.filled || star.half, 
          'text-gray-300 dark:text-gray-600': !star.filled && !star.half
          }"></fa-icon>
      </ng-container>
      <span class="ml-2 text-gray-600 dark:text-gray-300 ">({{ count }} reviews)</span>
    </div>

  `,
  styles: ``
})
export class StarsRatingComponent implements OnInit {
  @Input() rating: number = 0;
  @Input() count: number = 0;

  stars: { icon: IconDefinition, half: boolean, filled: boolean }[] = [];

  ngOnInit(): void {
    this.stars = this.calculateStars(this.rating);
  }

  calculateStars(rating: number): { icon: IconDefinition, half: boolean, filled: boolean }[] {
    const stars = Array(5).fill(0).map((_, index) => {
      if (index < Math.floor(rating)) {
        return { icon: faStar, half: false, filled: true };
      } else if (index < Math.ceil(rating) && rating % 1 !== 0) {
        return { icon: faStarHalfAlt, half: true, filled: false };
      } else {
        return { icon: faStar, half: false, filled: false };
      }
    });
    return stars;
  }
}
