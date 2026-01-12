import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './core/topbar/topbar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    RouterOutlet,
    TopbarComponent
  ],
})
export class AppComponent {}
