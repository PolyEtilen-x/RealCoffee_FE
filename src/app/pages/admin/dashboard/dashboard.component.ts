import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-dashboard',
    imports: [CommonModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  totalRevenue = 120_000_000;
  lastMonthRevenue = 95_000_000;

  mainBrandRevenue = 70_000_000;
  lastMonthMainBrand = 60_000_000;

  otherBrands = [
    { name: 'Brand A', revenue: 20_000_000 },
    { name: 'Brand B', revenue: 15_000_000 },
    { name: 'Brand C', revenue: 10_000_000 }
  ];

  getGrowth(current: number, last: number): number {
    return Math.round(((current - last) / last) * 100);
  }
}
