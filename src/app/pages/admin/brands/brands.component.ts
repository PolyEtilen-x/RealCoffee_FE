import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-admin-brand',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
  brands = signal<any[]>([]);
  loading = signal(false);
  error = signal('');

  constructor(private adminService: AdminService) {
    this.fetchBrands();
  }

  fetchBrands() {
    this.loading.set(true);

    this.adminService.getPendingBrands().subscribe({
      next: (res: any[]) => {
        this.brands.set(res);  
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Không tải được danh sách brand');
        this.loading.set(false);
      }
    });
  }
}
