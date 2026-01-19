import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
@Component({
    standalone: true,
    selector: 'app-seller-register',
    imports: [
      CommonModule, 
      FormsModule, 
      RouterLink, 
      FooterComponent],
    templateUrl: './seller-register.component.html',
    styleUrl: './seller-register.component.css'

})
export class SellerRegisterComponent {

  email = '';
  password = '';
  confirmPassword = '';

  isSeller = true;

  brandMode: 'existing' | 'new' = 'existing';

  brands = ['RealCoffee', 'Brand A', 'Brand B'];
  selectedBrand = '';

  brand = {
    name: '',
    description: '',
    phone: '',
    address: '',
    taxCode: ''
  };

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
  
  submit() {
    console.log('[REGISTER SELLER]', {
      email: this.email,
      password: this.password,
      brandMode: this.brandMode,
      brand: this.brandMode === 'new'
        ? this.brand
        : this.selectedBrand
    });
  }
}
