"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMapper = void 0;
const author_service_1 = require("../services/author.service");
class BookMapper {
    static async toOutputDto(book) {
        let bookDto = {
            id: book.id,
            title: book.title,
            publish_year: book.publish_year,
            isbn: book.isbn,
            author: book.author,
        };
        if (bookDto.author === undefined) {
            bookDto.author = await author_service_1.authorService.getAuthorById(book.author_id);
        }
        return bookDto;
    }
    static async toOutputDtoList(bookList) {
        let bookListDto = [];
        for (let book of bookList) {
            let bookDto = await BookMapper.toOutputDto(book);
            bookListDto.push(bookDto);
        }
        return bookListDto;
    }
}
exports.BookMapper = BookMapper;
