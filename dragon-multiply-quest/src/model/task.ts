export interface Task  {
    x: number;
    y: number;
    result: number;
    type: TaskType;    
  }
  
  export enum TaskType {
    Multiply = 'x',
    Divide = '÷'
  }