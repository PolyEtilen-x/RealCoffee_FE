import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { FeaturedComponent } from './sections/featured/featured.component';
import { PartnerBrandsComponent } from './sections/partner_brands/partner_brands.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    FeaturedComponent,
    PartnerBrandsComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-featured></app-featured>
    <app-partner-brands></app-partner-brands>
  `
})
export class HomeComponent {}
