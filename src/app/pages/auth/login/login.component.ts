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
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loading = false;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) return;

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/']);
    }, 1000);
  }
}
