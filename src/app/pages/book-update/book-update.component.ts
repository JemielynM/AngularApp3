import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-update.component.html',
  styleUrl: './book-update.component.css'
})
export class BookUpdateComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book | null = null;
  message = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  editBook(book: Book): void {
    this.selectedBook = { ...book };
    this.message = '';
  }

  updateBook(): void {
    if (!this.selectedBook) return;

    this.bookService.updateBook(this.selectedBook).subscribe((response: any) => {
      if (response.success) {
        this.message = 'Book updated successfully.';
        this.selectedBook = null;
        this.loadBooks();
      } else {
        this.message = 'Update failed.';
      }
    });
  }
}