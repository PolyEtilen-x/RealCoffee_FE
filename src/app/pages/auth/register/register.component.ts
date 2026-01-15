import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ReactiveFormsModule,
    FormBuilder,
    Validators,
    FormGroup
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

    loading = false;
    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router
    ) {}
   
    ngOnInit(): void {
        this.form = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            confirm: ['', Validators.required]
        });
    }

    submit() {
        if (this.form.invalid) return;

        if (this.form.value.password !== this.form.value.confirm) {
        alert('Password không khớp');
        return;
        }

        this.loading = true;

        setTimeout(() => {
        this.loading = false;
        this.router.navigate(['/login']);
        }, 1000);
    }
}
