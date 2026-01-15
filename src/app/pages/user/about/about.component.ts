import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

import { HeroComponent } from './sections/hero/hero.component';
import { FarmToCupComponent } from './sections/farmtocup/farmtocup.component';
import { QualityComponent } from './sections/quality/quality.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    FarmToCupComponent,
    QualityComponent,
    FooterComponent
  ],
  templateUrl: './about.component.html'
})
export class AboutComponent {}
