import { UserOutputDTO } from "./user.dto";

export interface GameInputDTO {
  white_id: number;
  black_id: number;
  date:Date;
  winner:number;
  hidden:boolean;
  ranked:boolean;
}

export interface GameInputPatchDTO {
  white?: number;
  black?: number;
  date?:Date;
  winner_id?:number;
  hidden?:boolean;
  ranked?:boolean;
}

export interface GameOutputDTO {
  id:number;
  white: UserOutputDTO;
  black: UserOutputDTO;
  date:Date;
  winner:UserOutputDTO;
  hidden:boolean;
  ranked:boolean;
}
