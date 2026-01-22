import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../core/services/admin.service';

@Component({
    selector: 'app-admin-brand',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './brands.component.html',
    styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit {
  brands: any[] = [];
  loading = false;
  error = '';

  constructor(private adminService: AdminService) {
      console.log('INSTANCE ID', Math.random());

  }

  ngOnInit(): void {
    this.fetchBrands();
  }

  fetchBrands() {
    this.loading = true;

    this.adminService.getPendingBrands().subscribe({
      next: (res: any[]) => {
        this.brands = res;
        this.loading = false;

        console.log('[BRANDS]', res);
      },
      error: () => {
        this.error = 'Không tải được danh sách brand';
        this.loading = false;
      },
    });
  }

  approve(id: string) {
    if (!confirm('Duyệt brand này?')) return;

    this.adminService.approveBrand(id).subscribe(() => {
      this.brands = this.brands.filter(b => b._id !== id)
    });
  }

  reject(id: string) {
    const reason = prompt('Lý do từ chối (tuỳ chọn)');

    this.adminService.rejectBrand(id, reason || undefined).subscribe(() => {
      this.brands = this.brands.filter(b => b._id !== id)
    });
  }
}
