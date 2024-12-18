import type { User } from "./User.model";

export interface Game {
    id:number;
    white: User;
    black: User;
    date:Date;
    winner?:User;
    hidden:boolean;
    ranked:boolean;
    move:string;
  }