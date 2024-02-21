import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Task } from 'src/model/task';
import { RightsService } from 'src/service/deck/rights.service';

export enum GameState {
  Begining,
  Runing,
  Pause,
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
  private taskQuantity: number = 7;
  private errorPunishment: number = 3;
  
  public state: GameState = GameState.Begining;
  public taskIndex: number = 0; 
  public userResult: string = '';
  private rightAnswer?: number;
  public deck: Task[];
  public GameState = GameState;
  private timestampId?: ReturnType<typeof setTimeout>;
  private timer: number = 0;  
  private errors: number = 0;

  private _rightsService = inject(RightsService)

  constructor(){
    this.deck = this._rightsService.getRandomRights();
    this.timer = new Date().getTime();
  }

  public startGame(): void {    
    this.startTask();
  }  

  private finishGame(): void {
    this.taskIndex = 0;      
    this.state = GameState.Begining;
  }

  private startTask(): void {    
    this.state = GameState.Runing;
    const task = this.deck[this.taskIndex];
    this.rightAnswer = task.x * task.y;
    this.timer = new Date().getTime();
  }

  private finishTask(): void {    
    this.timestampId = setTimeout(()=>{
      const duration = Math.floor((new Date().getTime() - this.timer) / 1000);
      const punishment = this.errors * this.errorPunishment;
      let points = 10 - duration - punishment + (duration !== 0 ? 1 : 0);
      if(points === 0 && punishment === 0) points = 1;

      console.log(duration, punishment, points);

      this.errors = 0; 
      this.userResult = '';  
      if(this.taskIndex === this.taskQuantity - 1 || this.taskIndex === this.deck.length -1){
        this.finishGame();
      } else {
        this.taskIndex = this.taskIndex + 1;     
        this.startTask();
      }      
    }, 500);
  }

  private checkResult(): void {
    if(this.rightAnswer?.toString().length === this.userResult.length){
      if(this.rightAnswer === Number(this.userResult)){
        this.state = GameState.Success;
        this.finishTask();
      } else {
        this.state = GameState.Error;
        this.errors = this.errors + 1;
      }
    } else {
      this.state = GameState.Runing;
    }
  }  

  public keyRemove():void {
    if(this.state === GameState.Error || this.state === GameState.Runing){
      const length = this.userResult.length; 
      if(length){
        this.userResult = this.userResult.slice(0,length-1);
      }    
    }
  }

  public keyNumber(value: number):void { 
    if(this.state === GameState.Error || this.state === GameState.Runing){
      if(this.state === GameState.Error){
        this.userResult = value.toString();
      } else if (this.state === GameState.Runing){
        this.userResult = '' + this.userResult + value;
      }     
      this.checkResult();
    }    
  }  
}
