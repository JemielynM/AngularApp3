import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html'
})
export class BookUpdateComponent {
  books: any[] = [];
  selectedBook: any = null;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  editBook(book: any) {
    this.selectedBook = { ...book };
  }

  updateBook() {
    this.bookService.updateBook(this.selectedBook).subscribe(() => {
      alert('Book updated!');
      this.selectedBook = null;
      this.ngOnInit();
    });
  }
}