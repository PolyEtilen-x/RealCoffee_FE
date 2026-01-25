import { Routes } from '@angular/router';
import { SellerComponent } from './seller.component';


export const SellerRoutes: Routes = [
  {
    path: '',
    component: SellerComponent,
    children: [
        {
            path: '',
            loadComponent: () =>
                import('./seller-status/seller-status.component')
                .then(m => m.SellerStatusComponent)
        },
        // {
        // path: 'dashboard',
        // loadComponent: () =>
        //     import('./pages/seller/dashboard/dashboard.component')
        //     .then(m => m.SellerDashboardComponent)
        // },
        {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
        },
    ]
  },
];
