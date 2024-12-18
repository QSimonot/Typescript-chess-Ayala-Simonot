"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookService = exports.BookService = void 0;
const sequelize_1 = require("sequelize");
const NotFoundError_1 = require("../error/NotFoundError");
const book_mapper_1 = require("../mapper/book.mapper");
const bookCollection_mapper_1 = require("../mapper/bookCollection.mapper");
const author_model_1 = require("../models/author.model");
const book_model_1 = require("../models/book.model");
const bookCollection_model_1 = require("../models/bookCollection.model");
class BookService {
    constructor() {
        this.includeAuthor = {
            include: [
                {
                    model: author_model_1.Author,
                    as: "author",
                },
            ],
        };
    }
    async getAllBooks() {
        let books = await book_model_1.Book.findAll(this.includeAuthor);
        return book_mapper_1.BookMapper.toOutputDtoList(books);
    }
    async getBookById(id) {
        let book = await book_model_1.Book.findByPk(id, this.includeAuthor);
        if (book) {
            return book_mapper_1.BookMapper.toOutputDto(book);
        }
        else {
            (0, NotFoundError_1.notFound)("Book");
        }
    }
    async createBook(title, publishYear, authorId, isbn) {
        try {
            let book = await book_model_1.Book.create({
                title: title,
                publish_year: publishYear,
                isbn: isbn,
                author_id: authorId,
            });
            return book_mapper_1.BookMapper.toOutputDto(book);
        }
        catch (err) {
            if (err instanceof sequelize_1.ForeignKeyConstraintError) {
                throw (0, NotFoundError_1.notFound)("Author");
            }
            throw err;
        }
    }
    async updateBook(id, title, publishYear, authorId, isbn) {
        const book = await book_model_1.Book.findByPk(id);
        if (book) {
            if (title !== undefined)
                book.title = title;
            if (publishYear != undefined)
                book.publish_year = publishYear;
            if (authorId !== undefined)
                book.author_id = authorId;
            if (isbn !== undefined)
                book.isbn = isbn;
            try {
                await book.save();
            }
            catch (err) {
                if (err instanceof sequelize_1.ForeignKeyConstraintError) {
                    throw (0, NotFoundError_1.notFound)("Author");
                }
                throw err;
            }
            return book_mapper_1.BookMapper.toOutputDto(book);
        }
        else {
            (0, NotFoundError_1.notFound)("Book");
        }
    }
    async deleteBook(id) {
        const book = await book_model_1.Book.findByPk(id, {
            include: [
                {
                    model: bookCollection_model_1.BookCollection,
                    as: "collections",
                },
            ],
        });
        if (book) {
            if (book.collections.length > 0) {
                const error = new Error("Deletion of book " +
                    id +
                    " isn't possible due to presence of his.er books in library");
                error.status = 412;
                throw error;
            }
            else {
                book.destroy();
            }
        }
        else {
            (0, NotFoundError_1.notFound)("Book");
        }
    }
    async getBookCollectionsByBookId(id) {
        return bookCollection_mapper_1.BookCollectionMapper.toOutputDtoList(await bookCollection_model_1.BookCollection.findAll({
            where: {
                book_id: id,
            },
        }));
    }
}
exports.BookService = BookService;
exports.bookService = new BookService();
