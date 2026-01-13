import { Component } from '@angular/core';
import { RevealDirective } from '../../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css'
})
export class CtaComponent {}
