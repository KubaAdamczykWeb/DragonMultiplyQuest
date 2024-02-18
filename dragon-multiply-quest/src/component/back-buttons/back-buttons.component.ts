import { CommonModule, Location } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dramul-back-buttons',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './back-buttons.component.html',
  styleUrl: './back-buttons.component.scss'
})
export class BackButtonsComponent {
  @Input() showBackButton: boolean = false;
  private location = inject(Location);

  public goBack(): void {
    this.location.back();
  }
}
