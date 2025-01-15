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
exports.UserController = void 0;
const tsoa_1 = require("tsoa");
const user_service_1 = require("../services/user.service");
let UserController = class UserController extends tsoa_1.Controller {
    // Récupère tous les utilisateurs
    async getAllUsers() {
        return user_service_1.userService.getAllUsers();
    }
    // Récupère un utilisateur par ID
    async getUserById(id) {
        return user_service_1.userService.getUserById(id);
    }
    async getUserByName(name) {
        return user_service_1.userService.getUserByName(name);
    }
    // Crée un nouvel utilisateur
    async createUser(requestBody) {
        const { username, password } = requestBody;
        return user_service_1.userService.createUser(username, password);
    }
    // Supprime un utilisateur par ID
    async deleteUser(id) {
        await user_service_1.userService.deleteUser(id);
    }
    // Met à jour un utilisateur par ID
    async updateUser(id, requestBody) {
        const { username, password, elo } = requestBody;
        return user_service_1.userService.updateUser(id, username, password, elo);
    }
};
exports.UserController = UserController;
__decorate([
    (0, tsoa_1.Get)("/"),
    (0, tsoa_1.Security)("jwt"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    (0, tsoa_1.Security)("jwt"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
__decorate([
    (0, tsoa_1.Get)("/name/{name}"),
    (0, tsoa_1.Security)("jwt"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByName", null);
__decorate([
    (0, tsoa_1.Post)("/"),
    (0, tsoa_1.Security)("jwt"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    (0, tsoa_1.Security)("jwt"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, tsoa_1.Patch)("{id}"),
    (0, tsoa_1.Security)("jwt"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
exports.UserController = UserController = __decorate([
    (0, tsoa_1.Route)("users"),
    (0, tsoa_1.Tags)("Users")
], UserController);
