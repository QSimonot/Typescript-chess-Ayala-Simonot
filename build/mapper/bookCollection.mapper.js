"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCollectionMapper = void 0;
const bookCollection_dto_1 = require("../dto/bookCollection.dto");
const book_service_1 = require("../services/book.service");
class BookCollectionMapper {
    static async toOutputDto(bookCollection) {
        let bookCollectionDto = {
            id: bookCollection.id,
            book: bookCollection.book,
            available: bookCollection.available,
            state: (0, bookCollection_dto_1.getStateFromInteger)(bookCollection.state),
        };
        if (bookCollectionDto.book === undefined) {
            bookCollectionDto.book = await book_service_1.bookService.getBookById(bookCollection.book_id);
        }
        return bookCollectionDto;
    }
    static async toOutputDtoList(bookCollectionList) {
        let bookCollectionDtoList = [];
        for (let bookCollection of bookCollectionList) {
            bookCollectionDtoList.push(await BookCollectionMapper.toOutputDto(bookCollection));
        }
        return bookCollectionDtoList;
    }
}
exports.BookCollectionMapper = BookCollectionMapper;
