"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiGameOfUser = getApiGameOfUser;
exports.createDefaultGame = createDefaultGame;
const gameApi_1 = require("./gameApi");
const userApi_1 = require("../utilisateur/userApi");
async function getApiGameOfUser(id) {
    let gameOfUser = await (0, gameApi_1.getGameOfUser)(id);
    return gameOfUser;
}
async function getMoveOfGame(id) {
    let gameOfUser = await (0, gameApi_1.getGameOfUser)(id);
    return gameOfUser;
}
async function updateMove(id, move) {
    let gameOfUser = await updateMove(id, move);
    if (gameOfUser == 200) {
        return 200;
    }
    else {
        return 400;
    }
}
async function createDefaultGame(name) {
    const white = await (0, userApi_1.getUser)(name);
    const black = await (0, userApi_1.getUser)('default');
    if (white.id === undefined || black.id === undefined) {
        return 400;
    }
    else {
        const date = new Date();
        let success = await (0, gameApi_1.createGame)(white.id, black.id, date, true, false);
        if (success) {
            return 200;
        }
        else {
            return 400;
        }
    }
}
async function createGameWithPlayers(player1, player2) {
    const white = await (0, userApi_1.getUser)(player1);
    const black = await (0, userApi_1.getUser)(player2);
    if (white.id === undefined || black.id === undefined) {
        return;
    }
    else {
        const date = new Date();
        let success = await (0, gameApi_1.createGame)(white.id, black.id, date, true, false);
    }
}
