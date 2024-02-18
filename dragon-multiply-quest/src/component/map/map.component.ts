import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'dramul-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  public chooseNumber(number?: number): void {
    console.log(number)
  }
}
