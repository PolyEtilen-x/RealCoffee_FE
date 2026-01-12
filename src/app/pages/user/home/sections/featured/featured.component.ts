import {
  Component,
  AfterViewInit,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [CommonModule], // ⬅️ BẮT BUỘC
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss'
})
export class FeaturedComponent implements AfterViewInit {
  products = [
    { name: 'Arabica Roast', price: 120000 },
    { name: 'House Blend', price: 98000 },
    { name: 'Cold Brew', price: 65000 }
  ];

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    this.el.nativeElement
      .querySelectorAll('.reveal')
      .forEach((el: HTMLElement) => observer.observe(el));
  }
}
