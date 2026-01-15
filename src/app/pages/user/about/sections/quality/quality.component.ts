import { Component } from '@angular/core';
import { RevealDirective } from '../../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-quality',
  standalone: true,
  imports: [ RevealDirective ],
  templateUrl: './quality.component.html',
  styleUrl: './quality.component.css'
})
export class QualityComponent {}
