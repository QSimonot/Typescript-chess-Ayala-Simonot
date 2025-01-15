"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveService = exports.MoveService = void 0;
const NotFoundError_1 = require("../error/NotFoundError");
const move_mapper_1 = require("../mapper/move.mapper");
const game_model_1 = require("../models/game.model");
const move_model_1 = require("../models/move.model");
class MoveService {
    constructor() {
        this.includeGame = {
            include: [
                {
                    model: game_model_1.Game,
                    as: "id_game",
                },
            ],
        };
    }
    // Récupère tous les utilisateurs
    async getAllMoves() {
        let moveList = await move_model_1.Move.findAll(this.includeGame);
        return move_mapper_1.MoveMapper.toOutputDtoList(moveList);
    }
    // Récupère un move par ID
    async getMoveById(game) {
        let move = await move_model_1.Move.findByPk(game, this.includeGame);
        if (move) {
            return move_mapper_1.MoveMapper.toOutputDto(move);
        }
        else {
            (0, NotFoundError_1.notFound)("Move");
        }
    }
    // Crée un nouvel moves
    async createMove(id, move) {
        return move_mapper_1.MoveMapper.toOutputDto(await move_model_1.Move.create({ id: id, move: move }));
    }
    // Supprime un move par ID
    async deleteMove(id) {
        const move = await move_model_1.Move.findByPk(id);
        if (move) {
            move.destroy();
        }
        else {
            (0, NotFoundError_1.notFound)("Move");
        }
    }
    // Met à jour des moves
    async updateMove(id, move) {
        let moves = await move_model_1.Move.findByPk(id);
        if (moves) {
            if (moves)
                moves.id = id;
            if (moves)
                moves.move = moves.move + move || "";
            await moves.save();
            return move_mapper_1.MoveMapper.toOutputDto(moves);
        }
        else {
            (0, NotFoundError_1.notFound)("Move");
        }
    }
}
exports.MoveService = MoveService;
exports.moveService = new MoveService();
