import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly tokenKey = 'auth_token';

  constructor(private cookieService: CookieService) {}

  setToken(token: string, domain: string, expirationDays: number = 7): void {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);
    console.log(
      this.tokenKey,
      token,
      expirationDate,
      '/',
      domain,
      true,
      'Strict'
    );
    this.cookieService.set(
      this.tokenKey,
      token,
      expirationDate,
      '/',
      domain,
      true,
      'Strict'
    );
  }

  getToken(): string | null {
    console.log(this.cookieService.get(this.tokenKey));
    return this.cookieService.get(this.tokenKey);
  }

  removeToken(domain: string): void {
    this.cookieService.delete(this.tokenKey, '/', domain);
  }

  // Method to check if the user is logged in
  isLoggedIn(): boolean {
    console.log('token', this.getToken());
    return !!this.getToken();
  }
  // Method to log out the user
  logout(): void {
    this.removeToken(window.location.hostname);
  }
}
