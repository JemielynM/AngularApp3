import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // Base URL for the PHP backend running in XAMPP
  private apiUrl = 'http://localhost/angularapp3-api';

  constructor(private http: HttpClient) {}

  // Get all books
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/get_books.php`);
  }

  // Add a new book
  addBook(book: Book) {
    return this.http.post(`${this.apiUrl}/add_book.php`, book);
  }

  // Delete a book
  deleteBook(id: number) {
    return this.http.post(`${this.apiUrl}/delete_book.php`, { id });
  }

  // Update a book
  updateBook(book: Book) {
    return this.http.post(`${this.apiUrl}/update_book.php`, book);
  }

  // Register a new user
  registerUser(user: any) {
    return this.http.post(`${this.apiUrl}/register.php`, user);
  }

  // Login existing user
  loginUser(user: any) {
    return this.http.post(`${this.apiUrl}/login.php`, user);
  }
}