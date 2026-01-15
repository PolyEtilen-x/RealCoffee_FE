import { Component } from '@angular/core';
import { RevealDirective } from '../../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-farm-to-cup',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './farmtocup.component.html',
  styleUrl: './farmtocup.component.css'
})
export class FarmToCupComponent {}
