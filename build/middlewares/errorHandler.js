"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Middleware pour gérer les erreurs
const errorHandler = (err, req, res, next) => {
    console.error("An error occurred:", err);
    // Définir un statut d'erreur par défaut
    const statusCode = err.status || 500;
    if (statusCode === 400 && "fields" in err) {
        for (let key in err.fields) {
            let request = err.fields[key];
            if ("message" in request && "value" in request) {
                err.message =
                    key.replace("requestBody.", "") +
                        " " +
                        request.value +
                        " " +
                        request.message;
            }
        }
    }
    const message = err.message || "Internal Server Error";
    // Envoyer la réponse d'erreur au client
    res.status(statusCode).json({
        status: statusCode,
        message: message,
    });
};
exports.default = errorHandler;
