import { CanActivateFn, Router } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const adminGuard: CanActivateFn = () => {
  const platformId = inject(PLATFORM_ID);
  const router = inject(Router);

  if (!isPlatformBrowser(platformId)) {
    return false;
  }

  const role = localStorage.getItem('userRole');

  if (role === 'admin') {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
