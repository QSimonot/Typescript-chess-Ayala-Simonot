"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database")); // Connection à la base de données
const author_model_1 = require("./author.model");
class Book extends sequelize_1.Model {
}
exports.Book = Book;
Book.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    publish_year: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    author_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    isbn: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    sequelize: database_1.default,
    tableName: "Book",
});
Book.belongsTo(author_model_1.Author, { foreignKey: "author_id", as: "author" });
author_model_1.Author.hasMany(Book, { sourceKey: "id", foreignKey: "author_id", as: "books" });
