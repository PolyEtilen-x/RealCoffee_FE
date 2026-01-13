import { Component } from '@angular/core';
import { RevealDirective } from '../../../../../shared/directives/reveal.directive';

interface Feature {
  title: string;
  desc: string;
  icon: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      title: 'Nguồn gốc rõ ràng',
      desc: 'Hạt cà phê được chọn lọc từ vùng trồng uy tín.',
      icon: '☕'
    },
    {
      title: 'Rang xay chuẩn vị',
      desc: 'Quy trình rang kiểm soát chặt chẽ từng mẻ.',
      icon: '🔥'
    },
    {
      title: 'Chất lượng đồng nhất',
      desc: 'Đảm bảo hương vị ổn định trong mỗi sản phẩm.',
      icon: '✔'
    },
    {
      title: 'Thương hiệu đồng hành',
      desc: 'Hợp tác cùng các brand có cùng tiêu chuẩn.',
      icon: '🤝'
    }
  ];
}