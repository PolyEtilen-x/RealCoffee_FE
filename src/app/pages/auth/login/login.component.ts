import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule,
    FooterComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  showSellerPopup = false;

  openSellerPopup() {
    this.showSellerPopup = true;
  }

  closeSellerPopup() {
    this.showSellerPopup = false;
  }

  submit() {
    this.error = '';
    this.loading = true;

    this.http
      .post<any>('http://localhost:5000/api/auth/login', {
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (res) => {
          const { accessToken, user } = res.data;

          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('userRole', user.role);

          if (user.role === 'admin') {
            this.router.navigate(['/admin/dashboard']);
          } 
          else if (user.role === 'seller') {
            this.router.navigate(['/seller/']);
          } 
          else {
            this.router.navigate(['/']);
          }

          this.loading = false;
        },
        error: (err) => {
          alert(err.error?.message || 'Login failed');
          this.loading = false;
        },
      });
  }
}