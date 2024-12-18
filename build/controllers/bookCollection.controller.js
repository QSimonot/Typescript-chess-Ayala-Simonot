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
exports.BookCollectionController = void 0;
const tsoa_1 = require("tsoa");
const bookCollection_service_1 = require("../services/bookCollection.service");
let BookCollectionController = class BookCollectionController extends tsoa_1.Controller {
    async getAllBooksCollection() {
        return bookCollection_service_1.bookCollectionService.getAllBookCollections();
    }
    async getBookCollection(id) {
        return bookCollection_service_1.bookCollectionService.getBookCollectionById(id);
    }
    async postBookCollection(requestBody) {
        return bookCollection_service_1.bookCollectionService.createBookCollection(requestBody.book_id, requestBody.available, requestBody.state);
    }
    async patchBookCollection(id, requestBody) {
        return bookCollection_service_1.bookCollectionService.updateBookCollection(id, requestBody.book_id, requestBody.available, requestBody.state);
    }
    async deleteBookCollection(id) {
        await bookCollection_service_1.bookCollectionService.deleteBookCollection(id);
    }
};
exports.BookCollectionController = BookCollectionController;
__decorate([
    (0, tsoa_1.Get)("/"),
    (0, tsoa_1.Security)("jwt", ["bookcollection:read"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookCollectionController.prototype, "getAllBooksCollection", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    (0, tsoa_1.Security)("jwt", ["bookcollection:read"]),
    __param(0, (0, tsoa_1.Path)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookCollectionController.prototype, "getBookCollection", null);
__decorate([
    (0, tsoa_1.Post)("/"),
    (0, tsoa_1.Security)("jwt", ["bookcollection:create"]),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookCollectionController.prototype, "postBookCollection", null);
__decorate([
    (0, tsoa_1.Patch)("{id}"),
    (0, tsoa_1.Security)("jwt", ["bookcollection:write"]),
    __param(0, (0, tsoa_1.Path)("id")),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BookCollectionController.prototype, "patchBookCollection", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    (0, tsoa_1.Security)("jwt", ["bookcollection:delete"]),
    __param(0, (0, tsoa_1.Path)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookCollectionController.prototype, "deleteBookCollection", null);
exports.BookCollectionController = BookCollectionController = __decorate([
    (0, tsoa_1.Route)("book-collections"),
    (0, tsoa_1.Tags)("BookCollections")
], BookCollectionController);
