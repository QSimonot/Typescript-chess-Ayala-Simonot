"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCollection = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database")); // Connexion à la base de données
const book_model_1 = require("./book.model");
class BookCollection extends sequelize_1.Model {
}
exports.BookCollection = BookCollection;
BookCollection.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    book_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    available: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    state: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    tableName: "BookCollection",
});
BookCollection.belongsTo(book_model_1.Book, { foreignKey: "book_id", as: "book" });
book_model_1.Book.hasMany(BookCollection, {
    foreignKey: "book_id",
    as: "collections",
    sourceKey: "id",
});
