import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-delete.component.html',
  styleUrl: './book-delete.component.css'
})
export class BookDeleteComponent implements OnInit {

  books: Book[] = [];
  message = '';

  constructor(private bookService: BookService) {}

  ngOnInit() {
  this.loadBooks();
}

  // Load books from database
  loadBooks() {
  this.bookService.getBooks().subscribe((data) => {
    this.books = data;
  });
}

  // Delete selected book
  deleteBook(id: number): void {
  this.bookService.deleteBook(id).subscribe(() => {
    this.loadBooks(); // 🔥 reload list after delete
  });
}
}