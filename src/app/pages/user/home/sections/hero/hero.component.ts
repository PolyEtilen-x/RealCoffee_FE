import { Component, OnInit, OnDestroy } from '@angular/core';

interface Slide {
  title: string;
  subtitle: string;
  cta: string;
  image: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {

  slides: Slide[] = [
    {
      title: 'Real Coffee',
      subtitle: 'Cà phê nguyên bản cho người yêu chất lượng',
      cta: 'Khám phá sản phẩm',
      image: '/assets/images/slide-1.jpg'
    },
    {
      title: 'Rang xay chuẩn vị',
      subtitle: 'Kiểm soát chất lượng từ nguồn gốc',
      cta: 'Xem quy trình',
      image: '/assets/images/slide-2.jpg'
    },
    {
      title: 'Đồng hành cùng thương hiệu chọn lọc',
      subtitle: 'Mở rộng hệ sinh thái cà phê',
      cta: 'Trở thành đối tác',
      image: '/assets/images/slide-3.jpg'
    }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
