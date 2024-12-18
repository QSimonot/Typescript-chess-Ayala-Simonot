import { MoveOutputDTO } from "../dto/move.dto";
import { notFound } from "../error/NotFoundError";
import { MoveMapper } from "../mapper/move.mapper";
import { Game } from "../models/game.model";
import { Move } from "../models/move.model";

export class MoveService {
    readonly includeGame = {
        include: [
            {
            model: Game,
            as: "id_game",
            },
        ],
        };
  // Récupère tous les utilisateurs
  public async getAllMoves(): Promise<MoveOutputDTO[]> {
    let moveList = await Move.findAll(this.includeGame);
    return MoveMapper.toOutputDtoList(moveList);
  }

  // Récupère un move par ID
  public async getMoveById(game: number): Promise<MoveOutputDTO> {
    let move = await Move.findByPk(game, this.includeGame);
    if (move) {
      return MoveMapper.toOutputDto(move);
    } else {
      notFound("Move");
    }
  }

  // Crée un nouvel moves
  public async createMove(
    id: number,
    move: string,
  ): Promise<MoveOutputDTO> {
    return MoveMapper.toOutputDto(
      await Move.create({ id: id, move: move }),
    );
  }

  // Supprime un move par ID
  public async deleteMove(id: number): Promise<void> {
    const move = await Move.findByPk(id);
    if (move) {
      move.destroy();
    } else {
      notFound("Move");
    }
  }

  // Met à jour des moves
  public async updateMove(
    id: number,
    move?: string | undefined
  ): Promise<MoveOutputDTO> {
    let moves = await Move.findByPk(id);
    
    if (moves) {
      if (moves) moves.id = id;
      if (moves) moves.move = moves.move + move || "";

      await moves.save();
      return MoveMapper.toOutputDto(moves);
    } else {
      notFound("Move");
    }
  }
}

export const moveService = new MoveService();
