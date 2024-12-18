"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: "sqlite",
    define: {
        timestamps: false,
    },
    storage: "./chess.sqlite", // Chemin vers la base SQLite
});
exports.default = sequelize;
