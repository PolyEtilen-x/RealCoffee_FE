import {
  Component,
  AfterViewInit,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const items = this.el.nativeElement.querySelectorAll('.animate');

    items.forEach((item: HTMLElement, index: number) => {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 150);
    });
  }
}
