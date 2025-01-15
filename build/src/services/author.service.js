"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorService = exports.AuthorService = void 0;
const NotFoundError_1 = require("../error/NotFoundError");
const author_mapper_1 = require("../mapper/author.mapper");
const book_mapper_1 = require("../mapper/book.mapper");
const author_model_1 = require("../models/author.model");
const book_model_1 = require("../models/book.model");
const bookCollection_model_1 = require("../models/bookCollection.model");
class AuthorService {
    constructor() {
        this.includeBooksBookColections = {
            include: [
                {
                    model: book_model_1.Book,
                    as: "books",
                    include: [
                        {
                            model: bookCollection_model_1.BookCollection,
                            as: "collections",
                        },
                    ],
                },
            ],
        };
    }
    // Récupère tous les auteurs
    async getAllAuthors() {
        let authorList = await author_model_1.Author.findAll();
        return author_mapper_1.AuthorMapper.toOutputDtoList(authorList);
    }
    // Récupère un auteur par ID
    async getAuthorById(id) {
        let author = await author_model_1.Author.findByPk(id);
        if (author) {
            return author_mapper_1.AuthorMapper.toOutputDto(author);
        }
        else {
            (0, NotFoundError_1.notFound)("Author");
        }
    }
    // Crée un nouvel auteur
    async createAuthor(firstName, lastName) {
        return author_mapper_1.AuthorMapper.toOutputDto(await author_model_1.Author.create({ first_name: firstName, last_name: lastName }));
    }
    // Supprime un auteur par ID
    async deleteAuthor(id) {
        const author = await author_model_1.Author.findByPk(id, this.includeBooksBookColections);
        if (author) {
            if (author.books.length > 0) {
                let booksId = [];
                for (let book of author.books) {
                    if (book.collections.length > 0) {
                        const error = new Error("Deletion of author " +
                            id +
                            " isn't possible due to presence of his.er books in library");
                        error.status = 412;
                        throw error;
                    }
                    else {
                        booksId.push(book.id);
                    }
                }
                book_model_1.Book.destroy({ where: { id: booksId } });
            }
            author.destroy();
        }
        else {
            (0, NotFoundError_1.notFound)("Author");
        }
    }
    // Met à jour un auteur
    async updateAuthor(id, firstName, lastName) {
        const author = await author_model_1.Author.findByPk(id);
        if (author) {
            if (firstName)
                author.first_name = firstName;
            if (lastName)
                author.last_name = lastName;
            await author.save();
            return author_mapper_1.AuthorMapper.toOutputDto(author);
        }
        else {
            (0, NotFoundError_1.notFound)("Author");
        }
    }
    async getBooksByAuthorId(id) {
        return book_mapper_1.BookMapper.toOutputDtoList(await book_model_1.Book.findAll({
            where: {
                author_id: id,
            },
        }));
    }
}
exports.AuthorService = AuthorService;
exports.authorService = new AuthorService();
