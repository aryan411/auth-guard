import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../../services/token/token.service';

export const AuthGuard: CanActivateFn = () => {
  const authService = inject(TokenService);
  const router = inject(Router);
  console.log('is Login', authService.isLoggedIn());
  return authService.isLoggedIn() ? true : router.parseUrl('/auth/login');
};
