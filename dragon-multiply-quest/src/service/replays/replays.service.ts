import { Injectable } from '@angular/core';

export interface Operation  {
  x: number;
  y: number;
  result: number;
  type: OperationType;    
}

export enum OperationType {
  Multiply = 'x',
  Divide = '÷'
}

@Injectable({
  providedIn: 'root'
})
export class ReplaysService {
  private replays: Operation[] = [
    { x: 1, y: 1, result: 1, type: OperationType.Multiply},
    { x: 1, y: 3, result: 3, type: OperationType.Multiply},
    { x: 10, y: 1, result: 10, type: OperationType.Multiply},
    { x: 3, y: 3, result: 9, type: OperationType.Multiply},
    { x: 6, y: 6, result: 36, type: OperationType.Multiply},
  ]  

  public getRandomOperationAsString():string {
    const operation = this.replays[Math.floor(Math.random() * this.replays.length)];
    return `${operation.x} ${operation.type} ${operation.y} = ${operation.result}`;
  }
}
