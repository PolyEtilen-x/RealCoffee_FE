import { Component } from '@angular/core';
import { RevealDirective } from '../../../../../shared/directives/reveal.directive';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  posts: BlogPost[] = [
    {
      title: 'Hành trình từ hạt cà phê đến ly cà phê',
      excerpt: 'Khám phá quy trình rang xay và kiểm soát chất lượng của Real Coffee.',
      image: '/assets/images/blog-1.jpg'
    },
    {
      title: 'Arabica và Robusta khác nhau thế nào?',
      excerpt: 'Tìm hiểu sự khác biệt giữa hai loại cà phê phổ biến nhất.',
      image: '/assets/images/blog-2.jpg'
    },
    {
      title: 'Cách pha cà phê ngon tại nhà',
      excerpt: 'Những mẹo đơn giản để có ly cà phê chuẩn vị mỗi ngày.',
      image: '/assets/images/blog-3.jpg'
    }
  ];
}
