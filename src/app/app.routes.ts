import { Routes } from '@angular/router';
import { HomeComponent } from './pages/user/home/home.component';
import { AboutComponent } from './pages/user/about/about.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AdminComponent } from './pages/admin/admin.component'
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UsersComponent } from './pages/admin/users/users.component';

import path from 'path';

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
  path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },   // 👈 mặc định
      { path: 'users', component: UsersComponent }
    ]
  },
  //default
  { path: '', redirectTo: '/', pathMatch: 'full' }

];