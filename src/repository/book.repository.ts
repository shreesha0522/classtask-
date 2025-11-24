import { Book } from "../types/book.type";

export const books: Book[] = [
    { id: "B-1", title: "1984" },
    { id: "B-2", title: "To Kill a Mockingbird", date: "2025-12-15" }
];

export interface IBookRepository {
    getALlBooks(): Book[];
    getBookById(id:string):Book | undefined;
    createBook(book:Book): Book;

}
//example 
// export class PostRepository implements IBookRepository {
//     getALlBooks(): Book[] {
//         //logic to get posts from database
//         //const data=db.query("SELECT * FROM books");
//         return data;
//     }
// }


export class BookRepository implements IBookRepository {
    getALlBooks(): Book[] {
        return books;
        
    }
    getBookById(id: string): Book | undefined {
        return books.find(book => book.id === id);
    }
    createBook(newBook: Book): Book {
        books.push(newBook);
        return newBook;
    }
}