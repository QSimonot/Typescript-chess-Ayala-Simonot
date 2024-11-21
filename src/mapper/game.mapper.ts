import { GameOutputDTO } from "../dto/game.dto";
import { Game } from "../models/game.model";
import { GameService } from "../services/game.service";
import { userService } from "../services/user.service";

export class GameMapper {
  public static async toOutputDto(Game: Game): Promise<GameOutputDTO> {
    let GameDto: GameOutputDTO = {
      id: Game.id,
      white: Game.white,
      black: Game.black,
      date: Game.date,
      winner: Game.winner,
      private: Game.private,
      ranked: Game.ranked,

    };

    if (GameDto.white === undefined) {
      GameDto.white = await userService.getUserById(Game.white_id);
    }
    if (GameDto.black === undefined) {
        GameDto.black = await userService.getUserById(Game.black_id);
    }
    if (GameDto.winner === undefined) {
        GameDto.winner = await userService.getUserById(Game.winner_id);
    }

    return GameDto;
  }

  public static async toOutputDtoList(
    GameList: Game[],
  ): Promise<GameOutputDTO[]> {
    let GameListDto: GameOutputDTO[] = [];

    for (let Game of GameList) {
      let GameDto = await GameMapper.toOutputDto(Game);
      GameListDto.push(GameDto);
    }

    return GameListDto;
  }
}
