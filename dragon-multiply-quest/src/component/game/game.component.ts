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
  public state: GameState = GameState.Begining;
  public taskIndex: number = 0;
  public taskQuantity: number = 3;
  public userResult: string = '';
  public rightAnswer?: number;
  public deck: Task[];
  public GameState = GameState;
  public timestampId?: ReturnType<typeof setTimeout>;
  public timer: number = 0;  

  private _rightsService = inject(RightsService)

  constructor(){
    this.deck = this._rightsService.getRandomRights();
    this.timer = new Date().getTime();
  }

  public startGame(): void {
    this.taskIndex = -1;
    this.startTask();
  }  

  private finishGame(): void {
    
  }

  private startTask(): void {
    this.userResult = '';
    this.taskIndex = this.taskIndex + 1;
    this.state = GameState.Runing;
    const task = this.deck[this.taskIndex];
    this.rightAnswer = task.x * task.y;
  }

  private finishTask(): void {    
    this.timestampId = setTimeout(()=>{
      this.startTask();
    }, 1000);
  }

  private checkResult(): void {
    if(this.rightAnswer?.toString().length === this.userResult.length){
      if(this.rightAnswer === Number(this.userResult)){
        this.state = GameState.Success;
        this.finishTask();
      } else {
        this.state = GameState.Error;
      }
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


    // if(this.state !== GameState.Begining){  
    //   this.taskIndex += 1;
    //   this.result = (this.deck[this.taskIndex].x * this.deck[this.taskIndex].y).toString();
      
      
    //   if(this.taskIndex > this.taskQuantity){
    //     this.taskIndex = 0;
    //     this.result = '';
    //     this.state = GameState.Begining;
    //   } 
    // }
  
}
