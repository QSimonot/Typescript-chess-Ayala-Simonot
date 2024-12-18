"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
const tsoa_1 = require("tsoa");
const game_service_1 = require("../services/game.service");
let GameController = class GameController extends tsoa_1.Controller {
    async getAllGames() {
        return game_service_1.gameService.getAllGame();
    }
    async getGame(id) {
        return await game_service_1.gameService.getGameById(id);
    }
    async postGame(requestBody) {
        return game_service_1.gameService.createGame(requestBody.white_id, requestBody.black_id, requestBody.date, requestBody.hidden, requestBody.ranked);
    }
    async patchGame(id, requestBody) {
        return game_service_1.gameService.updateGame(id, requestBody.white, requestBody.black, requestBody.date, requestBody.winner_id, requestBody.hidden, requestBody.ranked);
    }
    async deleteGame(id) {
        await game_service_1.gameService.deleteGame(id);
    }
};
exports.GameController = GameController;
__decorate([
    (0, tsoa_1.Get)("/"),
    (0, tsoa_1.Security)("jwt", ["game:read"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GameController.prototype, "getAllGames", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    (0, tsoa_1.Security)("jwt", ["game:read"]),
    __param(0, (0, tsoa_1.Path)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "getGame", null);
__decorate([
    (0, tsoa_1.Post)("/"),
    (0, tsoa_1.Security)("jwt", ["game:create"]),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "postGame", null);
__decorate([
    (0, tsoa_1.Patch)("{id}"),
    (0, tsoa_1.Security)("jwt", ["game:write"]),
    __param(0, (0, tsoa_1.Path)("id")),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "patchGame", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    (0, tsoa_1.Security)("jwt", ["game:delete"]),
    __param(0, (0, tsoa_1.Path)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GameController.prototype, "deleteGame", null);
exports.GameController = GameController = __decorate([
    (0, tsoa_1.Route)("game"),
    (0, tsoa_1.Tags)("Games")
], GameController);
