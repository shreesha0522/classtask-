import { IBookRepository, BookRepository } from "../repository/book.repository";
import { Book } from "../types/book.type";
import { CreateBookDTO } from "../dtos/book.dtos";

let bookRepository: IBookRepository = new BookRepository();

export class BookService {

    getBooks(): Book[] {
        //business login transformation
        let transformationBooks =
            bookRepository
                .getALlBooks()
                .map(bk => {
                    return {
                        ...bk,
                        title: bk.title.toUpperCase()
                    };
                });

        return transformationBooks;
    }

    createBook = (bookData: CreateBookDTO): Book => {
        const newBook: Book = { ...bookData };

        let existingBook = bookRepository.getBookById(newBook.id);
        if (existingBook) {
            throw new Error("Book ID already exists");
        }

        return bookRepository.createBook(newBook);
    }
}
