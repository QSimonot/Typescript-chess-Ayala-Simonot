import { GameOutputDTO } from "./game.dto";

export interface MoveInputDTO {
  id:number;
  move: string;
}

export interface MoveInputPatchDTO {
  id?:number;
  move?: string;
}

export interface MoveOutputDTO {
  id: GameOutputDTO;
  move: string;
}
