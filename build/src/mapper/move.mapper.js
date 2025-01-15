"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveMapper = void 0;
const game_service_1 = require("../services/game.service");
class MoveMapper {
    static async toOutputDto(move) {
        let MoveDto = {
            id: move.id_game,
            move: move.move,
        };
        if (MoveDto.id === undefined) {
            MoveDto.id = await game_service_1.gameService.getGameById(MoveDto.id);
        }
        return MoveDto;
    }
    static async toOutputDtoList(MoveList) {
        let MoveListDto = [];
        for (let Move of MoveList) {
            let GameDto = await MoveMapper.toOutputDto(Move);
            MoveListDto.push(GameDto);
        }
        return MoveListDto;
    }
}
exports.MoveMapper = MoveMapper;
