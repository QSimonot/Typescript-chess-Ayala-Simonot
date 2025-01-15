"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database")); // Connexion à la base de données
const game_model_1 = require("./game.model");
class Move extends sequelize_1.Model {
}
exports.Move = Move;
Move.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    move: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: database_1.default,
    tableName: "Move",
});
Move.belongsTo(game_model_1.Game, { foreignKey: "id", as: "id_game" });
game_model_1.Game.hasMany(Move, { sourceKey: "id", foreignKey: "id", as: "id_game" });
