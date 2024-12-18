"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAuthentication = expressAuthentication;
const jwt = __importStar(require("jsonwebtoken"));
function expressAuthentication(request, securityName, scopes) {
    if (securityName === "jwt") {
        const token = request.body.token ||
            request.query.token ||
            request.headers["authorization"]?.split(' ')[1];
        console.log(token);
        return new Promise((resolve, reject) => {
            if (!token) {
                reject(new Error("No token provided"));
            }
            jwt.verify(token, "your_jwt_secret_key", function (err, decoded) {
                if (err) {
                    reject(err);
                }
                else {
                    if (scopes !== undefined) {
                        // Check if JWT contains all required scopes
                        for (let scope of scopes) {
                        }
                    }
                    resolve(decoded);
                }
            });
        });
    }
    else {
        throw new Error("Only support JWT securityName");
    }
}
