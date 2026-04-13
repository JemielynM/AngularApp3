import { Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookAddComponent } from './pages/book-add/book-add.component';
import { BookDeleteComponent } from './pages/book-delete/book-delete.component';
import { BookUpdateComponent } from './pages/book-update/book-update.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: BookListComponent },
  { path: 'add', component: BookAddComponent },
  { path: 'delete', component: BookDeleteComponent },
  { path: 'update', component: BookUpdateComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'list' }
];