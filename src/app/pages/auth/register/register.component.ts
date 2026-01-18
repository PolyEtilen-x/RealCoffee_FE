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

    passwordRules = {
    upper: false,
    lower: false,
    number: false,
    length: false
    };

    checkPassword(value: string) {
        this.password = value;

        this.passwordRules.upper = /[A-Z]/.test(value);
        this.passwordRules.lower = /[a-z]/.test(value);
        this.passwordRules.number = /[0-9]/.test(value);
        this.passwordRules.length = value.length >= 8
    }

    isPasswordMatch(): boolean {
        return !!(
            this.password &&
            this.confirmPassword &&
            this.password === this.confirmPassword
        );
    }


    isFormValid(): boolean {
        const r = this.passwordRules;
        return r.upper && r.lower && r.number && r.length && this.isPasswordMatch();
    }

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
