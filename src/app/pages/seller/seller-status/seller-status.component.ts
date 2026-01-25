import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SellerService } from '../../../core/services/seller.service';

@Component({
  standalone: true,
  selector: 'app-seller-status',
  imports: [CommonModule],
  templateUrl: './seller-status.component.html'
})
export class SellerStatusComponent {
  loading = signal(true);
  status = signal<'pending' | 'approved' | 'rejected' | 'none'>('pending');
  reason = signal('');
  brandName = signal('');

  constructor(
    private sellerService: SellerService,
    private router: Router
  ) {
    this.checkStatus();
  }

  checkStatus() {
    this.sellerService.getBrandStatus().subscribe(res => {
      this.loading.set(false);

      if (res.status === 'approved') {
        this.router.navigate(['/seller/dashboard']);
        return;
      }

      if (res.status === 'none') {
        this.router.navigate(['/seller/register-brand']);
        return;
      }

      this.status.set(res.status);
      this.brandName.set(res.brand?.name || '');
      this.reason.set(res.reason || '');
    });
  }
}
