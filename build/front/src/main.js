"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const App_vue_1 = __importDefault(require("./App.vue"));
const config_1 = __importDefault(require("primevue/config"));
const Aura_1 = __importDefault(require("@primevue/themes/Aura"));
require("primeicons/primeicons.css");
require("primeflex/primeflex.css");
const router_1 = __importDefault(require("./router"));
const app = (0, vue_1.createApp)(App_vue_1.default);
app.use(config_1.default, {
    theme: {
        preset: Aura_1.default,
    },
});
app.use(router_1.default);
app.mount('#app');
