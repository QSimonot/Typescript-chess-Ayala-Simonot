import { GameOutputDTO } from "./game.dto";

export interface MoveInputDTO {
  moves: string;
}

export interface MoveInputPatchDTO {
  moves?: string;
}

export interface MoveOutputDTO {
  id: GameOutputDTO;
  moves: string;
}
