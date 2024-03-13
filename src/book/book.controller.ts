import { Controller, Param } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { Get ,Post,Body} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
@Controller('book')
export class BookController {
    constructor(private bookService:BookService) {}

    @Get()
    async getAllBooks(): Promise<Book[]>{
        return this.bookService.findAll();
    }
    @Post()
    async addBook(
        @Body()
        book:CreateBookDto
    ): Promise<Book>{
        return this.bookService.create(book);
    }

    @Get(
        ':id'
    )
    async getBook(@Param('id')
    id:string):Promise<Book>{
        return this.bookService.getBookById(id);
    }
  
}
