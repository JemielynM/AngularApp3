import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  book: Book = {
    title: '',
    author: '',
    description: ''
  };

  successMessage = '';

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.bookService.addBook(this.book).subscribe(() => {
      this.successMessage = 'Book added successfully!';
      this.book = {
        title: '',
        author: '',
        description: ''
      };

      setTimeout(() => {
        this.router.navigate(['/list']);
      }, 1000);
    });
  }
}