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
exports.AuthenticationController = void 0;
const tsoa_1 = require("tsoa");
const authentication_service_1 = require("../services/authentication.service");
let AuthenticationController = class AuthenticationController extends tsoa_1.Controller {
    async authenticate(body) {
        const { grant_type, username, password } = body;
        if (grant_type !== "password") {
            let error = new Error("Invalid grant type doit être égal à password");
            error.status = 400;
            throw error;
        }
        const token = await authentication_service_1.authService.authenticate(username, password);
        return { token };
    }
};
exports.AuthenticationController = AuthenticationController;
__decorate([
    (0, tsoa_1.Post)("/"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "authenticate", null);
exports.AuthenticationController = AuthenticationController = __decorate([
    (0, tsoa_1.Route)("auth")
], AuthenticationController);
