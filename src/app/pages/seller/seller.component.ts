import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './seller.component.html',
    styleUrl: './seller.component.css'
})
export class SellerComponent {
}
