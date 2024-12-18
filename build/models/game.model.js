"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database")); // Connection à la base de données
const user_model_1 = require("./user.model");
class Game extends sequelize_1.Model {
}
exports.Game = Game;
Game.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    white_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    black_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    winner_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    hidden: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    ranked: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    tableName: "Game",
});
Game.belongsTo(user_model_1.User, { foreignKey: "black_id", as: "black" });
Game.belongsTo(user_model_1.User, { foreignKey: "white_id", as: "white" });
Game.belongsTo(user_model_1.User, { foreignKey: "winner_id", as: "winner" });
user_model_1.User.hasMany(Game, { sourceKey: "id", foreignKey: "black_id", as: "black" });
user_model_1.User.hasMany(Game, { sourceKey: "id", foreignKey: "white_id", as: "white" });
user_model_1.User.hasMany(Game, { sourceKey: "id", foreignKey: "winner_id", as: "winner" });
