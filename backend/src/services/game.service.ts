import { ForeignKeyConstraintError } from "sequelize";
import { GameOutputDTO } from "../dto/game.dto";
import { notFound } from "../error/NotFoundError";
import { GameMapper } from "../mapper/game.mapper";
import { User } from "../models/user.model";
import { Game } from "../models/game.model";
import { Op } from "sequelize";

export class GameService {
  readonly includeUser = {
    include: [
      { model: User, as: "black" },  // Jeux où l'utilisateur est le joueur noir
      { model: User, as: "white" },  // Jeux où l'utilisateur est le joueur blanc
      { model: User, as: "winner" }, // Jeux où l'utilisateur est le gagnant
    ],
  };
  public async getAllGame(): Promise<GameOutputDTO[]> {
    let games = await Game.findAll(this.includeUser);

    return GameMapper.toOutputDtoList(games);
  }

  public async getGameById(id: number): Promise<GameOutputDTO> {
    let game = await Game.findByPk(id, this.includeUser);

    if (game) {
      return GameMapper.toOutputDto(game);
    } else {
      notFound("Game");
    }
  }

  public async createGame(
    black_id: number,
    white_id: number,
    date: Date,
    hidden: boolean,
    ranked:boolean,
  ): Promise<GameOutputDTO> {
    try {
      let game = await Game.create({
        black_id,
        white_id,
        date,
        winner_id:undefined,
        hidden,
        ranked,
      });
      return GameMapper.toOutputDto(game);
    } catch (err) {
      if (err instanceof ForeignKeyConstraintError) {
        throw notFound("Game");
      }
      throw err;
    }
  }

  public async updateGame(
    id: number,
    white_id?: number,
    black_id?: number,
    date?: Date,
    winner?: number | undefined,
    hidden?:boolean,
    ranked?:boolean,

  ): Promise<GameOutputDTO> {
    const game = await Game.findByPk(id);
    if (game) {
      if (id !== undefined) game.id = id;
      if (white_id != undefined) game.white_id = white_id;
      if (black_id !== undefined) game.black_id = black_id;
      if (date !== undefined) game.date = date;
      if (winner !== undefined) game.winner_id = winner;
      if (hidden !== undefined) game.hidden = hidden;
      if (ranked !== undefined) game.ranked = ranked;

      try {
        await game.save();
      } catch (err) {
        if (err instanceof ForeignKeyConstraintError) {
          throw notFound("Game");
        }
        throw err;
      }
      return GameMapper.toOutputDto(game);
    } else {
      notFound("Game");
    }
  }

  public async deleteGame(id: number): Promise<void> {
    const game = await Game.findByPk(id);
    if (game) {
        game.destroy();
    } else {
      notFound("Game");
    }
  }

  // Récupère un utilisateur par ID
  public async getUserGame(user: number): Promise<GameOutputDTO[]> {
    
    const game = await Game.findAll({
      include: [
        {
          model: User,
          as: 'white', // Alias for the white player
        },
        {
          model: User,
          as: 'black', // Alias for the black player
        },
        {
          model: User,
          as: 'winner', // Alias for the black player
        }
      ],
      where: {
        [Op.or]: [
          { white_id: user },
          { black_id: user }
        ]
      }
    });
    
    if (game) {
      return GameMapper.toOutputDtoList(game);
    } else {
      notFound("User");
    }
  }
}



export const gameService = new GameService();

