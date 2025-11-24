
import { Request, Response, Router } from 'express';
import{z} from 'zod';
import { BookService } from '../services/book.services';
import { CreateBookDTO } from '../dtos/book.dtos';
import { Book } from '../types/book.type';

const bookService=new BookService();


// export type Book = {
//     id: string;
//     title: string;
//     date?: string;
// }


export class BookController {
    createBook = (req: Request, res: Response) => {
        try{

        const validation = CreateBookDTO.safeParse(req.body);
        if(!validation.success){
            return res.status(400).json({errors:validation.error});

        }
        const {id,title}=validation.data;
        const newBook:Book=bookService.createBook({id,title});

        return res.status(201).json(newBook);
    } catch(err: Error | any){
        return res.status(500).json({error: err.message});


        }
        

       
    }


    getBooks = (req: Request, res: Response) => {
        const return_book: Book[] = bookService.getBooks();
        res.status(200).json(return_book);
    }
}

