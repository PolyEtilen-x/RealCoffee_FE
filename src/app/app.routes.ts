import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/user/home/home.component')
        .then(m => m.HomeComponent),
  },
  {
    path: 'company',
    loadComponent: () =>
      import('./pages/user/company/company.component')
        .then(m => m.CompanyComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/user/products/products.component')
        .then(m => m.ProductsComponent),
  },
  {
    path: 'post',
    loadComponent: () =>
      import('./pages/user/post/post.component')
        .then(m => m.PostComponent),
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('./pages/user/contacts/contacts.component')
        .then(m => m.ContactsComponent),
  },
];
