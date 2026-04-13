import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  message = '';

  constructor(private bookService: BookService) {}

  // Send registration form data to backend
  onSubmit(): void {
    this.bookService.registerUser(this.user).subscribe((response: any) => {
      if (response.success) {
        this.message = 'Registration successful.';
        this.user = {
          username: '',
          email: '',
          password: ''
        };
      } else {
        this.message = response.message || 'Registration failed.';
      }
    });
  }
}