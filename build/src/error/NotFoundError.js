"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = notFound;
function notFound(name) {
    const error = new Error(name + " not found");
    error.status = 404;
    throw error;
}
