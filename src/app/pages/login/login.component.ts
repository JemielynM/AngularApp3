import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  message = '';

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  // Send login credentials to backend
  onSubmit(): void {
    this.bookService.loginUser(this.user).subscribe((response: any) => {
      if (response.success) {
        this.message = 'Login successful.';
        localStorage.setItem('loggedInUser', JSON.stringify(response.user));
        this.router.navigate(['/list']);
      } else {
        this.message = response.message || 'Login failed.';
      }
    });
  }
}