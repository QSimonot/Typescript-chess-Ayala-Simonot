"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMoveOfGame = getMoveOfGame;
const AxiosConfig_1 = __importDefault(require("@/config/AxiosConfig"));
const ApiUrl_1 = require("@/constants/ApiUrl");
async function getMoveOfGame(id) {
    const res = await AxiosConfig_1.default.get(`${ApiUrl_1.ApiGetMovesOfGame}${id}`);
    return res.data;
}
