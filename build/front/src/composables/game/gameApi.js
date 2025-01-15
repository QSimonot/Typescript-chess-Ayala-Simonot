"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameOfUser = getGameOfUser;
exports.createGame = createGame;
const AxiosConfig_1 = __importDefault(require("@/config/AxiosConfig"));
const ApiUrl_1 = require("@/constants/ApiUrl");
async function createGame(white, black, date, hidden, ranked) {
    const res = await AxiosConfig_1.default.post(`${ApiUrl_1.ApiPostNewGame}`, {
        white_id: white,
        black_id: black,
        date: date.getDate(),
        winner: -1,
        hidden: hidden,
        ranked: ranked,
        move: ""
    });
    return res.status;
}
async function updateMove(id, move) {
    const res = await AxiosConfig_1.default.post(`${ApiUrl_1.ApiPostNewGame}${id}`, {
        move: move
    });
    return res.status;
}
async function getGameOfUser(id) {
    const res = await AxiosConfig_1.default.get(`${ApiUrl_1.ApiGetGameOfUser}${id}`);
    return res.data;
}
async function getGame(id) {
    const res = await AxiosConfig_1.default.get(`${ApiUrl_1.ApiGetGameById}${id}`);
    return res.data;
}
