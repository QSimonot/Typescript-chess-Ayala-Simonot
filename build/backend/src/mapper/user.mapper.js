"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
class UserMapper {
    static toOutputDto(user) {
        return {
            id: user.id,
            username: user.username,
            password: user.password,
            elo: user.elo,
        };
    }
    static toOutputDtoList(userList) {
        return userList.map((user) => UserMapper.toOutputDto(user));
    }
}
exports.UserMapper = UserMapper;
