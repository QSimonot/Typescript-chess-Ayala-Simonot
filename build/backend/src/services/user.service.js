"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = exports.UserService = void 0;
const NotFoundError_1 = require("../error/NotFoundError");
const user_mapper_1 = require("../mapper/user.mapper");
const user_model_1 = require("../models/user.model");
class UserService {
    // Récupère tous les utilisateurs
    async getAllUsers() {
        let userList = await user_model_1.User.findAll();
        return user_mapper_1.UserMapper.toOutputDtoList(userList);
    }
    // Récupère un utilisateur par ID
    async getUserById(id) {
        let user = await user_model_1.User.findByPk(id);
        if (user) {
            return user_mapper_1.UserMapper.toOutputDto(user);
        }
        else {
            (0, NotFoundError_1.notFound)("User");
        }
    }
    async getUserByName(name) {
        let user = await user_model_1.User.findOne({
            where: {
                username: name
            }
        });
        if (user) {
            return user_mapper_1.UserMapper.toOutputDto(user);
        }
        else {
            (0, NotFoundError_1.notFound)("User");
        }
    }
    // Crée un nouvel utilisateur
    async createUser(username, password) {
        return user_mapper_1.UserMapper.toOutputDto(await user_model_1.User.create({ username: username, password: btoa(password), elo: 300 }));
    }
    // Supprime un utilisateur par ID
    async deleteUser(id) {
        const user = await user_model_1.User.findByPk(id);
        if (user) {
            user.destroy();
        }
        else {
            (0, NotFoundError_1.notFound)("User");
        }
    }
    // Met à jour un utilisateur
    async updateUser(id, username, password, elo) {
        const user = await user_model_1.User.findByPk(id);
        if (user) {
            if (username)
                user.username = username;
            if (password)
                user.password = password;
            if (elo)
                user.elo = elo;
            await user.save();
            return user_mapper_1.UserMapper.toOutputDto(user);
        }
        else {
            (0, NotFoundError_1.notFound)("User");
        }
    }
}
exports.UserService = UserService;
exports.userService = new UserService();
