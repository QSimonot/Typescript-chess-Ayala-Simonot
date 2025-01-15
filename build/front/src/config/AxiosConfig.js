"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userConnecteService_1 = require("@/composables/utilisateur/userConnecteService");
const axios_1 = __importDefault(require("axios"));
const { userConnecte } = (0, userConnecteService_1.useUserConnecteService)();
const axiosInstance = axios_1.default.create({});
axiosInstance.interceptors.request.use((config) => {
    if (sessionStorage.getItem("token") != null) {
        config.headers['Authorization'] = `Bearer ${sessionStorage.getItem("token")}`;
    }
    config.headers['Authorization'] = `Bearer ${userConnecte.value.token}`;
    return config;
});
exports.default = axiosInstance;
