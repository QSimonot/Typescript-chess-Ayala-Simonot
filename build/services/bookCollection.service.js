"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookCollectionService = exports.BookCollectionService = void 0;
const bookCollection_dto_1 = require("../dto/bookCollection.dto");
const NotFoundError_1 = require("../error/NotFoundError");
const bookCollection_mapper_1 = require("../mapper/bookCollection.mapper");
const author_model_1 = require("../models/author.model");
const book_model_1 = require("../models/book.model");
const bookCollection_model_1 = require("../models/bookCollection.model");
const sequelize_1 = require("sequelize");
class BookCollectionService {
    constructor() {
        this.includeBookAndAuthor = {
            include: [
                {
                    model: book_model_1.Book,
                    as: "book",
                    include: [
                        {
                            model: author_model_1.Author,
                            as: "author",
                        },
                    ],
                },
            ],
        };
    }
    async getAllBookCollections() {
        let bookCollectionList = await bookCollection_model_1.BookCollection.findAll(this.includeBookAndAuthor);
        return bookCollection_mapper_1.BookCollectionMapper.toOutputDtoList(bookCollectionList);
    }
    async getBookCollectionById(id) {
        let bookCollection = await bookCollection_model_1.BookCollection.findByPk(id, this.includeBookAndAuthor);
        if (bookCollection) {
            return bookCollection_mapper_1.BookCollectionMapper.toOutputDto(bookCollection);
        }
        else {
            (0, NotFoundError_1.notFound)("Book Collection");
        }
    }
    async createBookCollection(bookId, available, state) {
        try {
            let bookCollection = await bookCollection_model_1.BookCollection.create({
                book_id: bookId,
                available: available,
                state: (0, bookCollection_dto_1.getIntegerFromState)(state),
            });
            return bookCollection_mapper_1.BookCollectionMapper.toOutputDto(bookCollection);
        }
        catch (err) {
            if (err instanceof sequelize_1.ForeignKeyConstraintError)
                throw (0, NotFoundError_1.notFound)("Book");
            throw err;
        }
    }
    async updateBookCollection(id, bookId, available, state) {
        const bookCollection = await bookCollection_model_1.BookCollection.findByPk(id);
        if (bookCollection) {
            if (bookId !== undefined)
                bookCollection.book_id = bookId;
            if (available !== undefined)
                bookCollection.available = available;
            if (state !== undefined)
                bookCollection.state = (0, bookCollection_dto_1.getIntegerFromState)(state);
            try {
                await bookCollection.save();
            }
            catch (err) {
                if (err instanceof sequelize_1.ForeignKeyConstraintError)
                    throw (0, NotFoundError_1.notFound)("Book");
                throw err;
            }
            return bookCollection_mapper_1.BookCollectionMapper.toOutputDto(bookCollection);
        }
        else {
            (0, NotFoundError_1.notFound)("Book Collection");
        }
    }
    async deleteBookCollection(id) {
        const bookCollection = await bookCollection_model_1.BookCollection.findByPk(id);
        if (bookCollection) {
            await bookCollection.destroy();
        }
        else {
            (0, NotFoundError_1.notFound)("Book Collection");
        }
    }
}
exports.BookCollectionService = BookCollectionService;
exports.bookCollectionService = new BookCollectionService();
