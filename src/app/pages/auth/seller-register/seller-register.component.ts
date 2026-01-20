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
      FooterComponent
    ],
    templateUrl: './seller-register.component.html',
    styleUrl: './seller-register.component.css'

})
export class SellerRegisterComponent {

  email = '';
  password = '';
  confirmPassword = '';

  brand = {
    name: '',
    description: '',
    phone: '',
    address: '',
    taxCode: ''
  };

  logoFile: File | null = null;
  licenseFile: File | null = null;
  logoPreview: string | null = null;
  licensePreview: string | null = null;

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

  onLogoChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    this.logoFile = input.files[0];
    this.logoPreview = URL.createObjectURL(this.logoFile);
  }


  onLicenseChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    this.licenseFile = input.files[0];
    this.licensePreview = URL.createObjectURL(this.licenseFile);  
  }

  isFormValid(): boolean {
    const r = this.passwordRules;

    return!! (
      this.email&&
      r.upper && r.lower && r.number && r.length && 
      this.isPasswordMatch() &&
      this.brand.name &&
      this.brand.phone &&
      this.brand.address &&
      this.logoFile &&
      this.licenseFile
    )
  }
  
  submit() {
    console.log('REGISTER SELLER DATA', {
      email: this.email,
      password: this.password,
      brand: this.brand,
      logo: this.logoFile,
      license: this.licenseFile,
    });
  }
}
