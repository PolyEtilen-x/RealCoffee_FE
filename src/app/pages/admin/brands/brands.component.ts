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

  // 🔥 TÁCH STATE
  pendingBrands = signal<any[]>([]);
  approvedBrands = signal<any[]>([]);

  loadingPending = signal(false);
  loadingApproved = signal(false);

  errorPending = signal('');
  errorApproved = signal('');

  constructor(private adminService: AdminService) {
    this.fetchPendingBrands();
    this.fetchApprovedBrands();
  }

  // ===== PENDING =====
  fetchPendingBrands() {
    this.loadingPending.set(true);

    this.adminService.getPendingBrands().subscribe({
      next: res => {
        this.pendingBrands.set(res);
        this.loadingPending.set(false);
      },
      error: () => {
        this.errorPending.set('Không tải được brand chờ duyệt');
        this.loadingPending.set(false);
      }
    });
  }

  approve(id: string) {
    if (!confirm('Duyệt brand này?')) return;

    this.adminService.approveBrand(id).subscribe(() => {
      // xoá khỏi pending
      this.pendingBrands.update(list =>
        list.filter(b => b._id !== id)
      );

      // refresh approved
      this.fetchApprovedBrands();
    });
  }

  reject(id: string) {
    const reason = prompt('Lý do từ chối (tuỳ chọn):');

    this.adminService.rejectBrand(id, reason || undefined).subscribe(() => {
      this.pendingBrands.update(list =>
        list.filter(b => b._id !== id)
      );
    });
  }

  // ===== APPROVED =====
  fetchApprovedBrands() {
    this.loadingApproved.set(true);

    this.adminService.getApprovedBrands().subscribe({
      next: res => {
        this.approvedBrands.set(res);
        this.loadingApproved.set(false);
      },
      error: () => {
        this.errorApproved.set('Không tải được brand đã duyệt');
        this.loadingApproved.set(false);
      }
    });
  }

  editBrand(brand: any) {
    const newName = prompt('Tên brand mới:', brand.name);
    if (!newName || newName === brand.name) return;

    this.adminService.updateBrand(brand._id, { name: newName })
      .subscribe(updated => {
        this.approvedBrands.update(list =>
          list.map(b => b._id === brand._id ? updated : b)
        );
      });
  }

  deleteBrand(id: string) {
    if (!confirm('Xoá brand này?')) return;

    this.adminService.deleteBrand(id).subscribe(() => {
      this.approvedBrands.update(list =>
        list.filter(b => b._id !== id)
      );
    });
  }
}
