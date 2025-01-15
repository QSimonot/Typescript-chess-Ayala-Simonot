"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = RegisterRoutes;
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const user_controller_1 = require("./../controllers/user.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const move_controller_1 = require("./../controllers/move.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const game_controller_1 = require("./../controllers/game.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const authentication_controller_1 = require("./../controllers/authentication.controller");
const authentication_1 = require("./../middlewares/authentication");
const expressAuthenticationRecasted = authentication_1.expressAuthentication;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "UserOutputDTO": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "username": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
            "elo": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserInputDTO": {
        "dataType": "refObject",
        "properties": {
            "username": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
            "elo": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserInputPatchDTO": {
        "dataType": "refObject",
        "properties": {
            "username": { "dataType": "string" },
            "password": { "dataType": "string" },
            "elo": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GameOutputDTO": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "white": { "ref": "UserOutputDTO", "required": true },
            "black": { "ref": "UserOutputDTO", "required": true },
            "date": { "dataType": "datetime", "required": true },
            "winner": { "ref": "UserOutputDTO", "required": true },
            "hidden": { "dataType": "boolean", "required": true },
            "ranked": { "dataType": "boolean", "required": true },
            "move": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MoveOutputDTO": {
        "dataType": "refObject",
        "properties": {
            "id": { "ref": "GameOutputDTO", "required": true },
            "move": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MoveInputDTO": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "move": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MoveInputPatchDTO": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double" },
            "move": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GameInputDTO": {
        "dataType": "refObject",
        "properties": {
            "white_id": { "dataType": "double", "required": true },
            "black_id": { "dataType": "double", "required": true },
            "date": { "dataType": "datetime", "required": true },
            "winner": { "dataType": "double", "required": true },
            "hidden": { "dataType": "boolean", "required": true },
            "ranked": { "dataType": "boolean", "required": true },
            "move": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GameInputPatchDTO": {
        "dataType": "refObject",
        "properties": {
            "white": { "dataType": "double" },
            "black": { "dataType": "double" },
            "date": { "dataType": "datetime" },
            "winner_id": { "dataType": "double" },
            "hidden": { "dataType": "boolean" },
            "ranked": { "dataType": "boolean" },
            "move": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AuthenticationInputDTO": {
        "dataType": "refObject",
        "properties": {
            "grant_type": { "dataType": "string", "required": true },
            "username": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get('/users', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.UserController.prototype.getAllUsers)), async function UserController_getAllUsers(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new user_controller_1.UserController();
            await templateService.apiHandler({
                methodName: 'getAllUsers',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/users/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.UserController.prototype.getUserById)), async function UserController_getUserById(request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new user_controller_1.UserController();
            await templateService.apiHandler({
                methodName: 'getUserById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/users/name/:name', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.UserController.prototype.getUserByName)), async function UserController_getUserByName(request, response, next) {
        const args = {
            name: { "in": "path", "name": "name", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new user_controller_1.UserController();
            await templateService.apiHandler({
                methodName: 'getUserByName',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/users', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.UserController.prototype.createUser)), async function UserController_createUser(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "UserInputDTO" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new user_controller_1.UserController();
            await templateService.apiHandler({
                methodName: 'createUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/users/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.UserController.prototype.deleteUser)), async function UserController_deleteUser(request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new user_controller_1.UserController();
            await templateService.apiHandler({
                methodName: 'deleteUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch('/users/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(user_controller_1.UserController.prototype.updateUser)), async function UserController_updateUser(request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "UserInputPatchDTO" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new user_controller_1.UserController();
            await templateService.apiHandler({
                methodName: 'updateUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/moves', authenticateMiddleware([{ "jwt": ["game:read"] }]), ...((0, runtime_1.fetchMiddlewares)(move_controller_1.MoveController)), ...((0, runtime_1.fetchMiddlewares)(move_controller_1.MoveController.prototype.getAllMoves)), async function MoveController_getAllMoves(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new move_controller_1.MoveController();
            await templateService.apiHandler({
                methodName: 'getAllMoves',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/moves/:id', authenticateMiddleware([{ "jwt": ["game:read"] }]), ...((0, runtime_1.fetchMiddlewares)(move_controller_1.MoveController)), ...((0, runtime_1.fetchMiddlewares)(move_controller_1.MoveController.prototype.getMoveById)), async function MoveController_getMoveById(request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new move_controller_1.MoveController();
            await templateService.apiHandler({
                methodName: 'getMoveById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/moves', authenticateMiddleware([{ "jwt": ["game:create"] }]), ...((0, runtime_1.fetchMiddlewares)(move_controller_1.MoveController)), ...((0, runtime_1.fetchMiddlewares)(move_controller_1.MoveController.prototype.createMove)), async function MoveController_createMove(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "MoveInputDTO" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new move_controller_1.MoveController();
            await templateService.apiHandler({
                methodName: 'createMove',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/moves/:id', authenticateMiddleware([{ "jwt": ["game:delete"] }]), ...((0, runtime_1.fetchMiddlewares)(move_controller_1.MoveController)), ...((0, runtime_1.fetchMiddlewares)(move_controller_1.MoveController.prototype.deleteMove)), async function MoveController_deleteMove(request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new move_controller_1.MoveController();
            await templateService.apiHandler({
                methodName: 'deleteMove',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch('/moves/update/:id', authenticateMiddleware([{ "jwt": ["game:create"] }]), ...((0, runtime_1.fetchMiddlewares)(move_controller_1.MoveController)), ...((0, runtime_1.fetchMiddlewares)(move_controller_1.MoveController.prototype.updateMove)), async function MoveController_updateMove(request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "MoveInputPatchDTO" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new move_controller_1.MoveController();
            await templateService.apiHandler({
                methodName: 'updateMove',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/games', authenticateMiddleware([{ "jwt": ["game:read"] }]), ...((0, runtime_1.fetchMiddlewares)(game_controller_1.GameController)), ...((0, runtime_1.fetchMiddlewares)(game_controller_1.GameController.prototype.getAllGames)), async function GameController_getAllGames(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new game_controller_1.GameController();
            await templateService.apiHandler({
                methodName: 'getAllGames',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/games/:id', authenticateMiddleware([{ "jwt": ["game:read"] }]), ...((0, runtime_1.fetchMiddlewares)(game_controller_1.GameController)), ...((0, runtime_1.fetchMiddlewares)(game_controller_1.GameController.prototype.getGame)), async function GameController_getGame(request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new game_controller_1.GameController();
            await templateService.apiHandler({
                methodName: 'getGame',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/games/user/:id', authenticateMiddleware([{ "jwt": ["game:read"] }]), ...((0, runtime_1.fetchMiddlewares)(game_controller_1.GameController)), ...((0, runtime_1.fetchMiddlewares)(game_controller_1.GameController.prototype.getGameOfUser)), async function GameController_getGameOfUser(request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new game_controller_1.GameController();
            await templateService.apiHandler({
                methodName: 'getGameOfUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/games', authenticateMiddleware([{ "jwt": ["game:create"] }]), ...((0, runtime_1.fetchMiddlewares)(game_controller_1.GameController)), ...((0, runtime_1.fetchMiddlewares)(game_controller_1.GameController.prototype.postGame)), async function GameController_postGame(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "GameInputDTO" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new game_controller_1.GameController();
            await templateService.apiHandler({
                methodName: 'postGame',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch('/games/:id', authenticateMiddleware([{ "jwt": ["game:write"] }]), ...((0, runtime_1.fetchMiddlewares)(game_controller_1.GameController)), ...((0, runtime_1.fetchMiddlewares)(game_controller_1.GameController.prototype.patchGame)), async function GameController_patchGame(request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "GameInputPatchDTO" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new game_controller_1.GameController();
            await templateService.apiHandler({
                methodName: 'patchGame',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/games/:id', authenticateMiddleware([{ "jwt": ["game:delete"] }]), ...((0, runtime_1.fetchMiddlewares)(game_controller_1.GameController)), ...((0, runtime_1.fetchMiddlewares)(game_controller_1.GameController.prototype.deleteGame)), async function GameController_deleteGame(request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new game_controller_1.GameController();
            await templateService.apiHandler({
                methodName: 'deleteGame',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.patch('/games/update/move/:id', authenticateMiddleware([{ "jwt": ["game:write"] }]), ...((0, runtime_1.fetchMiddlewares)(game_controller_1.GameController)), ...((0, runtime_1.fetchMiddlewares)(game_controller_1.GameController.prototype.addMove)), async function GameController_addMove(request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "GameInputPatchDTO" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new game_controller_1.GameController();
            await templateService.apiHandler({
                methodName: 'addMove',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/auth', ...((0, runtime_1.fetchMiddlewares)(authentication_controller_1.AuthenticationController)), ...((0, runtime_1.fetchMiddlewares)(authentication_controller_1.AuthenticationController.prototype.authenticate)), async function AuthenticationController_authenticate(request, response, next) {
        const args = {
            body: { "in": "body", "name": "body", "required": true, "ref": "AuthenticationInputDTO" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new authentication_controller_1.AuthenticationController();
            await templateService.apiHandler({
                methodName: 'authenticate',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function authenticateMiddleware(security = []) {
        return async function runAuthenticationMiddleware(request, response, next) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            // keep track of failed auth attempts so we can hand back the most
            // recent one.  This behavior was previously existing so preserving it
            // here
            const failedAttempts = [];
            const pushAndRethrow = (error) => {
                failedAttempts.push(error);
                throw error;
            };
            const secMethodOrPromises = [];
            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    const secMethodAndPromises = [];
                    for (const name in secMethod) {
                        secMethodAndPromises.push(expressAuthenticationRecasted(request, name, secMethod[name], response)
                            .catch(pushAndRethrow));
                    }
                    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
                    secMethodOrPromises.push(Promise.all(secMethodAndPromises)
                        .then(users => { return users[0]; }));
                }
                else {
                    for (const name in secMethod) {
                        secMethodOrPromises.push(expressAuthenticationRecasted(request, name, secMethod[name], response)
                            .catch(pushAndRethrow));
                    }
                }
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            try {
                request['user'] = await Promise.any(secMethodOrPromises);
                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }
                next();
            }
            catch (err) {
                // Show most recent error as response
                const error = failedAttempts.pop();
                error.status = error.status || 401;
                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }
                next(error);
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        };
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
