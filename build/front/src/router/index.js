"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_router_1 = require("vue-router");
// import AuthorList from '@/views/AuthorList.vue';
const AuthenticationPage_vue_1 = __importDefault(require("@/views/authentication/AuthenticationPage.vue"));
const ChessGame_vue_1 = __importDefault(require("@/views/ChessGame.vue"));
const SelectGame_vue_1 = __importDefault(require("@/components/SelectGame.vue"));
const routes = [
    { path: '/', redirect: '/authors' },
    { path: '/connect', name: 'login', component: AuthenticationPage_vue_1.default },
    { path: '/chessboard/:game', name: 'Chessboard', component: ChessGame_vue_1.default },
    { path: '/gamelist', name: 'Gameliste', component: SelectGame_vue_1.default },
];
// { path: '/authors', component: AuthorList },
//
const router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    routes,
});
exports.default = router;
