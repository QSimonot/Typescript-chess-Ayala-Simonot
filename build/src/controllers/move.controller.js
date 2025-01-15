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
exports.MoveController = void 0;
const tsoa_1 = require("tsoa");
const move_service_1 = require("../services/move.service");
let MoveController = class MoveController extends tsoa_1.Controller {
    // Récupère tous les utilisateurs
    async getAllMoves() {
        return move_service_1.moveService.getAllMoves();
    }
    // Récupère un utilisateur par ID
    async getMoveById(id) {
        return move_service_1.moveService.getMoveById(id);
    }
    // Crée un nouvel utilisateur
    async createMove(requestBody) {
        const { id, move } = requestBody;
        return move_service_1.moveService.createMove(id, move);
    }
    // Supprime un utilisateur par ID
    async deleteMove(id) {
        await move_service_1.moveService.deleteMove(id);
    }
    // Met à jour un utilisateur par ID
    async updateMove(id, requestBody) {
        return move_service_1.moveService.updateMove(id, requestBody.move);
    }
};
exports.MoveController = MoveController;
__decorate([
    (0, tsoa_1.Get)("/"),
    (0, tsoa_1.Security)("jwt"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoveController.prototype, "getAllMoves", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    (0, tsoa_1.Security)("jwt"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MoveController.prototype, "getMoveById", null);
__decorate([
    (0, tsoa_1.Post)("/"),
    (0, tsoa_1.Security)("jwt"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MoveController.prototype, "createMove", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    (0, tsoa_1.Security)("jwt"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MoveController.prototype, "deleteMove", null);
__decorate([
    (0, tsoa_1.Patch)("{id}"),
    (0, tsoa_1.Security)("jwt"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MoveController.prototype, "updateMove", null);
exports.MoveController = MoveController = __decorate([
    (0, tsoa_1.Route)("move"),
    (0, tsoa_1.Tags)("Move")
], MoveController);
