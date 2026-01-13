import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

import { HeroComponent } from './sections/hero/hero.component';
import { FeaturesComponent } from './sections/features/features.component';
import { AboutComponent } from './sections/about/about.component';
import { ProductsComponent } from './sections/products/products.component';
import { CtaComponent } from './sections/cta/cta.component';
import { BlogComponent } from './sections/blog/blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    AboutComponent,
    ProductsComponent,
    CtaComponent,
    BlogComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
