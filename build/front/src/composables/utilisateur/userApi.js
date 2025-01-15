"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
exports.getUser = getUser;
const AxiosConfig_1 = __importDefault(require("@/config/AxiosConfig"));
const ApiUrl_1 = require("@/constants/ApiUrl");
async function authenticate(user) {
    const res = await AxiosConfig_1.default.post(`${ApiUrl_1.ApiUrlConnection}`, {
        grant_type: 'password',
        username: user.username,
        password: user.password,
    });
    return res.data.token;
}
async function getUser(name) {
    const res = await AxiosConfig_1.default.get(`${ApiUrl_1.ApiGetUser}${name}`);
    return res.data;
}
