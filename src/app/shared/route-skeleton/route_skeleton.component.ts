import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-route-skeleton',
  standalone: true,
  imports: [NgIf],
  templateUrl: './route_skeleton.component.html',
  styleUrl: './route_skeleton.component.css',
})
export class RouteSkeletonComponent {
  loading = false;

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) this.loading = true;
      if (event instanceof NavigationEnd) this.loading = false;
    });
  }
}
