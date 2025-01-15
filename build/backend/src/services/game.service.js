"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameService = exports.GameService = void 0;
const sequelize_1 = require("sequelize");
const NotFoundError_1 = require("../error/NotFoundError");
const game_mapper_1 = require("../mapper/game.mapper");
const user_model_1 = require("../models/user.model");
const game_model_1 = require("../models/game.model");
const sequelize_2 = require("sequelize");
class GameService {
    constructor() {
        this.includeUser = {
            include: [
                { model: user_model_1.User, as: "black" }, // Jeux où l'utilisateur est le joueur noir
                { model: user_model_1.User, as: "white" }, // Jeux où l'utilisateur est le joueur blanc
                { model: user_model_1.User, as: "winner" }, // Jeux où l'utilisateur est le gagnant
            ],
        };
    }
    async getAllGame() {
        let games = await game_model_1.Game.findAll(this.includeUser);
        return game_mapper_1.GameMapper.toOutputDtoList(games);
    }
    async getGameById(id) {
        let game = await game_model_1.Game.findByPk(id, this.includeUser);
        if (game) {
            return game_mapper_1.GameMapper.toOutputDto(game);
        }
        else {
            (0, NotFoundError_1.notFound)("Game");
        }
    }
    async createGame(black_id, white_id, date, hidden, ranked) {
        try {
            let game = await game_model_1.Game.create({
                black_id,
                white_id,
                date,
                winner_id: undefined,
                hidden,
                ranked,
            });
            return game_mapper_1.GameMapper.toOutputDto(game);
        }
        catch (err) {
            if (err instanceof sequelize_1.ForeignKeyConstraintError) {
                throw (0, NotFoundError_1.notFound)("Game");
            }
            throw err;
        }
    }
    async updateGame(id, white_id, black_id, date, winner, hidden, ranked) {
        const game = await game_model_1.Game.findByPk(id);
        if (game) {
            if (id !== undefined)
                game.id = id;
            if (white_id != undefined)
                game.white_id = white_id;
            if (black_id !== undefined)
                game.black_id = black_id;
            if (date !== undefined)
                game.date = date;
            if (winner !== undefined)
                game.winner_id = winner;
            if (hidden !== undefined)
                game.hidden = hidden;
            if (ranked !== undefined)
                game.ranked = ranked;
            try {
                await game.save();
            }
            catch (err) {
                if (err instanceof sequelize_1.ForeignKeyConstraintError) {
                    throw (0, NotFoundError_1.notFound)("Game");
                }
                throw err;
            }
            return game_mapper_1.GameMapper.toOutputDto(game);
        }
        else {
            (0, NotFoundError_1.notFound)("Game");
        }
    }
    async updateMove(id, move) {
        const game = await game_model_1.Game.findByPk(id);
        if (game) {
            if (id !== undefined)
                game.id = id;
            game.move = game.move + move;
            try {
                await game.save();
            }
            catch (err) {
                if (err instanceof sequelize_1.ForeignKeyConstraintError) {
                    throw (0, NotFoundError_1.notFound)("Game");
                }
                throw err;
            }
            return game_mapper_1.GameMapper.toOutputDto(game);
        }
        else {
            (0, NotFoundError_1.notFound)("Game");
        }
    }
    async deleteGame(id) {
        const game = await game_model_1.Game.findByPk(id);
        if (game) {
            game.destroy();
        }
        else {
            (0, NotFoundError_1.notFound)("Game");
        }
    }
    // Récupère un utilisateur par ID
    async getUserGame(user) {
        const game = await game_model_1.Game.findAll({
            include: [
                {
                    model: user_model_1.User,
                    as: 'white', // Alias for the white player
                },
                {
                    model: user_model_1.User,
                    as: 'black', // Alias for the black player
                },
                {
                    model: user_model_1.User,
                    as: 'winner', // Alias for the black player
                }
            ],
            where: {
                [sequelize_2.Op.or]: [
                    { white_id: user },
                    { black_id: user }
                ]
            }
        });
        if (game) {
            return game_mapper_1.GameMapper.toOutputDtoList(game);
        }
        else {
            (0, NotFoundError_1.notFound)("User");
        }
    }
}
exports.GameService = GameService;
exports.gameService = new GameService();
