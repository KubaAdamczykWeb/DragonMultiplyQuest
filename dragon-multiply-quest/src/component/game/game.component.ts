import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'dramul-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  public buttons: number[] = [1,2,3,4,5,6,7,8,9,0];
  public isStarted: boolean = false;

  public pley(): void {
    this.isStarted = true;
  }

  public buttonClick(value: number):void {
    console.log(value);
  }
}
