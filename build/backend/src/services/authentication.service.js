"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = exports.AuthenticationService = void 0;
const user_model_1 = require("../models/user.model"); // Modèle Sequelize
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); // Pour générer le JWT
const buffer_1 = require("buffer"); // Pour décoder Base64
const NotFoundError_1 = require("../error/NotFoundError");
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; // Clé secrète pour signer le token
class AuthenticationService {
    async authenticate(username, password) {
        // Recherche l'utilisateur dans la base de données
        const user = await user_model_1.User.findOne({ where: { username } });
        if (!user) {
            throw (0, NotFoundError_1.notFound)("User");
        }
        // Décoder le mot de passe stocké en base de données
        const decodedPassword = buffer_1.Buffer.from(user.password, "base64").toString("utf-8");
        // Vérifie si le mot de passe est correct
        if (password === decodedPassword) {
            // Si l'utilisateur est authentifié, on génère un JWT
            var scopes;
            if (username == "admin") {
                scopes = {
                    "scopes": ["game:create", "game:read", "game:write", "game:delete"]
                };
            }
            else if (username == "user") {
                scopes = {
                    "scopes": ["game:read", "game:create", "game:write"]
                };
            }
            const token = jsonwebtoken_1.default.sign({ username: user.username, scopes: scopes }, JWT_SECRET, {
                expiresIn: "1h",
            });
            return token;
        }
        else {
            let error = new Error("Wrong password");
            error.status = 403;
            throw error;
        }
    }
}
exports.AuthenticationService = AuthenticationService;
exports.authService = new AuthenticationService();
