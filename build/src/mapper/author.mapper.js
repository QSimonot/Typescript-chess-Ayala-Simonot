"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorMapper = void 0;
class AuthorMapper {
    static toOutputDto(author) {
        return {
            id: author.id,
            first_name: author.first_name,
            last_name: author.last_name,
        };
    }
    static toOutputDtoList(authorList) {
        return authorList.map((author) => AuthorMapper.toOutputDto(author));
    }
}
exports.AuthorMapper = AuthorMapper;
