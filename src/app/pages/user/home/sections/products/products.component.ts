import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RevealDirective } from '../../../../../shared/directives/reveal.directive';

interface Product {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RevealDirective, DecimalPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Product[] = [
    {
      name: 'Arabica Roast',
      price: 120000,
      image: '/assets/images/product-1.jpg'
    },
    {
      name: 'House Blend',
      price: 98000,
      image: '/assets/images/product-2.jpg'
    },
    {
      name: 'Cold Brew',
      price: 65000,
      image: '/assets/images/product-3.jpg'
    },
    {
      name: 'Dark Roast',
      price: 110000,
      image: '/assets/images/product-4.jpg'
    }
  ];
}
