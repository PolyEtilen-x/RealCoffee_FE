import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../core/services/admin.service';
import { single } from 'rxjs';

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

  constructor( private adminService: AdminService ) {
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
        this.error.set('Khong tai duoc danh sach brand');
        this.loading.set(false);
      }
    });
  }

  approve(id: string) {
    if (!confirm('Duyệt brand này?')) return;

    this.adminService.approveBrand(id).subscribe({
      next: () => {
        this.brands.update(list =>
          list.filter(b => b._id !== id)
        );
      },
      error: () => {
        alert('Duyệt brand thất bại');
      }
    });
  }

  reject(id: string) {
    const reason = prompt('Lý do từ chối (tuỳ chọn):');

    this.adminService.rejectBrand(id, reason || undefined).subscribe({
      next: () => {
        this.brands.update(list =>
          list.filter(b => b._id !== id)
        );
      },
      error: () => {
        alert('Từ chối brand thất bại');
      }
    });
  }
}
