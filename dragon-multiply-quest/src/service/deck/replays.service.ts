import { Injectable } from '@angular/core';
import { Task, TaskType } from 'src/model/task';

@Injectable({
  providedIn: 'root'
})
export class ReplaysService {
  private replays: Task[] = [
    { x: 1, y: 1, result: 1, type: TaskType.Multiply},
    { x: 1, y: 3, result: 3, type: TaskType.Multiply},
    { x: 10, y: 1, result: 10, type: TaskType.Multiply},
    { x: 3, y: 3, result: 9, type: TaskType.Multiply},
    { x: 6, y: 6, result: 36, type: TaskType.Multiply},
  ]  

  public getRandomTaskAsString():string {
    const operation = this.replays[Math.floor(Math.random() * this.replays.length)];
    return `${operation.x} ${operation.type} ${operation.y} = ${operation.result}`
  }
}
