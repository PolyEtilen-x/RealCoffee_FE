import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partner-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partner_brands.component.html',
  styleUrl: './partner_brands.component.scss'
})
export class PartnerBrandsComponent implements AfterViewInit {
  brands = ['Mountain Brew', 'Origin Lab', 'Bean Collective'];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('show')),
      { threshold: 0.2 }
    );

    this.el.nativeElement
      .querySelectorAll('.reveal')
      .forEach((el: HTMLElement) => observer.observe(el));
  }
}
