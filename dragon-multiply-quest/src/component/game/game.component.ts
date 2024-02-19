import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Task } from 'src/model/task';
import { RightsService } from 'src/service/deck/rights.service';

export enum GameState {
  Begining,
  Runing,
  Error,
  Success
}

@Component({
  selector: 'dramul-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  public buttons: number[] = [1,2,3,4,5,6,7,8,9,0];
  public state: GameState = GameState.Begining;
  public taskIndex: number = 0;
  public taskQuantity: number = 3; 
  public result: string = '';
  public deck: Task[];
  public GameState = GameState;

  private _rightsService = inject(RightsService)

  constructor(){
    this.deck = this._rightsService.getRandomRights();

  }

  public pley(): void {
    this.state = GameState.Runing;
  }

  public buttonClick(value: string):void {
    console.log('s,i,q',this.state, this.taskIndex, this.taskQuantity)
    if(this.state !== GameState.Begining){  
      this.taskIndex += 1;
      this.result = (this.deck[this.taskIndex].x * this.deck[this.taskIndex].y).toString();
      
      
      if(this.taskIndex > this.taskQuantity){
        this.taskIndex = 0;
        this.result = '';
        this.state = GameState.Begining;
      } 
    }
  }
}
