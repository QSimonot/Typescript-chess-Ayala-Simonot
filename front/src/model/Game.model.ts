export interface Game {
    white_id: number;
    black_id: number;
    date:Date;
    winner?:number;
    hidden:boolean;
    ranked:boolean;
  }