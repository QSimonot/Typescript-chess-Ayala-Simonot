"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyUserPlease = getMyUserPlease;
exports.useUserService = useUserService;
const userApi_1 = require("./userApi");
async function getMyUserPlease() {
    let username = localStorage.getItem('user');
    const split = username?.substring(1, username.length - 1);
    if (username === null || split === undefined) {
    }
    else {
        const getMyUser = await (0, userApi_1.getUser)(split);
        return getMyUser;
    }
}
async function useUserService(user) {
    user.token = await (0, userApi_1.authenticate)(user);
    return user;
}
