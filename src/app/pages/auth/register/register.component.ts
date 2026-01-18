import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        FooterComponent
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {

  email = '';
  password = '';
  confirmPassword = '';
  error = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

    submit() {
        this.error = '';
        this.loading = true;

        this.authService.register(this.email, this.password).subscribe({
            next: () => {
            console.log('[FE] Register success');
            this.loading = false;
            this.router.navigate(['/login']);
            },
            error: err => {
            console.error('[FE] Register error', err);
            this.loading = false;
            this.error = 'Đăng ký thất bại';
            }
        });
    }
}
