import { Routes } from '@angular/router';
import { HomeComponent } from './pages/user/home/home.component';
import { AboutComponent } from './pages/user/about/about.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },

  //default
  { path: '', redirectTo: '/', pathMatch: 'full' }

];