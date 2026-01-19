import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-admin-users',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './users.component.html',
    styleUrl: './users.component.css'
})
export class UsersComponent {

  users = [
    {
      email: 'seller@gmail.com',
      role: 'seller',
      status: 'pending'
    },
    {
      email: 'user@gmail.com',
      role: 'user',
      status: 'approved'
    }
  ];

  approveSeller(user: any) {
    user.status = 'approved';
  }
}
