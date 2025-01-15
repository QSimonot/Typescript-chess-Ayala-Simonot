"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGetMovesOfGame = exports.ApiUpdateMove = exports.ApiGetGameById = exports.ApiPostNewGame = exports.ApiGetGameOfUser = exports.ApiGetUser = exports.ApiUrlUser = exports.ApiUrlConnection = void 0;
const config_json_1 = __importDefault(require("@/config.json"));
const ApiUrl = config_json_1.default.VUE_APP_API_BASE_URL;
exports.ApiUrlConnection = `${ApiUrl}/auth`;
exports.ApiUrlUser = `${ApiUrl}/users`;
exports.ApiGetUser = `${ApiUrl}/users/name/`;
exports.ApiGetGameOfUser = `${ApiUrl}/games/user/`;
exports.ApiPostNewGame = `${ApiUrl}/games/create/`;
exports.ApiGetGameById = `${ApiUrl}/games`;
exports.ApiUpdateMove = `${ApiUrl}/games/update/move/`;
exports.ApiGetMovesOfGame = `${ApiUrl}/moves/`;
