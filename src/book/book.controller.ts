import { Controller } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { Get ,Post,Body} from '@nestjs/common';
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
        book
    ): Promise<Book>{
        return this.bookService.create(book);
    }
  
}
