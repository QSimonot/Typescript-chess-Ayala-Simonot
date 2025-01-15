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
exports.BookController = void 0;
const tsoa_1 = require("tsoa");
const book_service_1 = require("../services/book.service");
let BookController = class BookController extends tsoa_1.Controller {
    async getAllBooks() {
        return book_service_1.bookService.getAllBooks();
    }
    async getBook(id) {
        return await book_service_1.bookService.getBookById(id);
    }
    async postBooks(requestBody) {
        return book_service_1.bookService.createBook(requestBody.title, requestBody.publish_year, requestBody.author_id, requestBody.isbn);
    }
    async patchBook(id, requestBody) {
        return book_service_1.bookService.updateBook(id, requestBody.title, requestBody.publish_year, requestBody.author_id, requestBody.isbn);
    }
    async deleteBook(id) {
        await book_service_1.bookService.deleteBook(id);
    }
    async getBookCollectionsByBookId(id) {
        return book_service_1.bookService.getBookCollectionsByBookId(id);
    }
};
exports.BookController = BookController;
__decorate([
    (0, tsoa_1.Get)("/"),
    (0, tsoa_1.Security)("jwt", ["book:read"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getAllBooks", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    (0, tsoa_1.Security)("jwt", ["book:read"]),
    __param(0, (0, tsoa_1.Path)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBook", null);
__decorate([
    (0, tsoa_1.Post)("/"),
    (0, tsoa_1.Security)("jwt", ["book:create"]),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "postBooks", null);
__decorate([
    (0, tsoa_1.Patch)("{id}"),
    (0, tsoa_1.Security)("jwt", ["book:write"]),
    __param(0, (0, tsoa_1.Path)("id")),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "patchBook", null);
__decorate([
    (0, tsoa_1.Delete)("{id}"),
    (0, tsoa_1.Security)("jwt", ["book:delete"]),
    __param(0, (0, tsoa_1.Path)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "deleteBook", null);
__decorate([
    (0, tsoa_1.Get)("{id}/book-collections"),
    (0, tsoa_1.Security)("jwt", ["book:read"]),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBookCollectionsByBookId", null);
exports.BookController = BookController = __decorate([
    (0, tsoa_1.Route)("books"),
    (0, tsoa_1.Tags)("Books")
], BookController);
