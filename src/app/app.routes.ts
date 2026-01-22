import { Routes } from '@angular/router';
import { HomeComponent } from './pages/user/home/home.component';
import { AboutComponent } from './pages/user/about/about.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

import path from 'path';
import { adminGuard } from './core/guards/admin.guards';

export const routes: Routes = [
  { path: '', 
    // component: MainLayoutComponent,
    children: [
      {path: '', component: HomeComponent }
    ]
  },
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  {
  path: 'register-seller',
    loadComponent: () =>
      import('./pages/auth/seller-register/seller-register.component')
        .then(m => m.SellerRegisterComponent)
  },

  {
  path: 'admin',
    canActivate: [adminGuard],
    loadChildren: () => 
      import('./pages/admin/admin.routes').then( m => m.AdminRoutes)
  },
  //default
  { path: '', redirectTo: '/', pathMatch: 'full' }

];