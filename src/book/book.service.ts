import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import mongoose from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel:mongoose.Model<Book>
    ) {}

    async findAll(): Promise<Book[]>{
        const books = await this.bookModel.find();
        return books;
    }
    async create(book:CreateBookDto): Promise<Book>{
        const res = await this.bookModel.create(book);
        return res;
    }

    async getBookById(id:string): Promise<Book>{
        const res = await this.bookModel.findById(id);
        return res;
    }
}
