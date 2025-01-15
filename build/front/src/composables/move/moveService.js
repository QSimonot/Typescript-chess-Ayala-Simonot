"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMove = getMove;
const moveApi_1 = require("./moveApi");
async function getMove(id) {
    const getMyUser = await (0, moveApi_1.getMoveOfGame)(id);
    return getMyUser;
}
