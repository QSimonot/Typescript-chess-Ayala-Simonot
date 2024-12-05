import { MoveInputDTO, MoveOutputDTO } from "../dto/move.dto";
import { Move } from "../models/move.model";
import { Game } from "../models/game.model";
import { gameService, GameService } from "../services/game.service";

export class MoveMapper {
  public static async toOutputDto(move: Move): Promise<MoveOutputDTO> {
    let MoveDto: MoveOutputDTO = {
      id: move.id_game,
      move: move.move,

    };

    if (MoveDto.id === undefined) {
        MoveDto.id = await gameService.getGameById(MoveDto.id);
    }

    return MoveDto;
  }

  public static async toOutputDtoList(
    MoveList: Move[],
  ): Promise<MoveOutputDTO[]> {
    let MoveListDto: MoveOutputDTO[] = [];

    for (let Move of MoveList) {
      let GameDto = await MoveMapper.toOutputDto(Move);
      MoveListDto.push(GameDto);
    }

    return MoveListDto;
  }

}
