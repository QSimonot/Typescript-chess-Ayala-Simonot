"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameMapper = void 0;
const user_service_1 = require("../services/user.service");
class GameMapper {
    static async toOutputDto(Game) {
        let GameDto = {
            id: Game.id,
            white: Game.white,
            black: Game.black,
            date: Game.date,
            winner: Game.winner,
            hidden: Game.hidden,
            ranked: Game.ranked,
        };
        if (GameDto.white === undefined) {
            GameDto.white = await user_service_1.userService.getUserById(Game.white_id);
        }
        if (GameDto.black === undefined) {
            GameDto.black = await user_service_1.userService.getUserById(Game.black_id);
        }
        if (GameDto.winner === undefined) {
        }
        return GameDto;
    }
    static async toOutputDtoList(GameList) {
        let GameListDto = [];
        for (let Game of GameList) {
            let GameDto = await GameMapper.toOutputDto(Game);
            GameListDto.push(GameDto);
        }
        return GameListDto;
    }
}
exports.GameMapper = GameMapper;
