"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserConnecteService = useUserConnecteService;
const vue_1 = require("vue");
const userConnecte = (0, vue_1.ref)({ username: '', password: '' });
function useUserConnecteService() {
    return {
        userConnecte,
    };
}
