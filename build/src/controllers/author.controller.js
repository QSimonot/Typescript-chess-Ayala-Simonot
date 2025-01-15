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
exports.AuthorController = void 0;
const tsoa_1 = require("tsoa");
const author_service_1 = require("../services/author.service");
let AuthorController = class AuthorController extends tsoa_1.Controller {
    // Récupère tous les auteurs
    async getAllAuthors() {
        return author_service_1.authorService.getAllAuthors();
    }
    // Récupère un auteur par ID
    async getAuthorById(id) {
        return author_service_1.authorService.getAuthorById(id);
    }
    // Crée un nouvel auteur
    async createAuthor(requestBody) {
        const { first_name, last_name } = requestBody;
        return author_service_1.authorService.createAuthor(first_name, last_name);
    }
    // Supprime un auteur par ID
    async deleteAuthor(id) {
        await author_service_1.authorService.deleteAuthor(id);
    }
    // Met à jour un auteur par ID
    async updateAuthor(id, requestBody) {
        const { first_name, last_name } = requestBody;
        return author_service_1.authorService.updateAuthor(id, first_name, last_name);
    }
    async getBooksByAuthorId(id) {
        return await author_service_1.authorService.getBooksByAuthorId(id);
    }
};
exports.AuthorController = AuthorController;
__decorate([
    (0, tsoa_1.Get)("/"),
    (0, tsoa_1.Security)("jwt", ["author:read"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getAllAuthors", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    (0, tsoa_1.Security)("jwt", ["author:read"]),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getAuthorById", null);
__decorate([
    (0, tsoa_1.Post)("/"),
    (0, tsoa_1.Security)("jwt", ["author:create"]),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "createAuthor", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    (0, tsoa_1.Security)("jwt", ["author:delete"]),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "deleteAuthor", null);
__decorate([
    (0, tsoa_1.Patch)("{id}"),
    (0, tsoa_1.Security)("jwt", ["author:write"]),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "updateAuthor", null);
__decorate([
    (0, tsoa_1.Get)("{id}/books"),
    (0, tsoa_1.Security)("jwt", ["author:read"]),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorController.prototype, "getBooksByAuthorId", null);
exports.AuthorController = AuthorController = __decorate([
    (0, tsoa_1.Route)("authors"),
    (0, tsoa_1.Tags)("Authors")
], AuthorController);
