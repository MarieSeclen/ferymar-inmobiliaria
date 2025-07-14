import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  isAuthenticated(): boolean {
    if (!this.isBrowser()) {
      return false;
    }
    const isAuth = localStorage.getItem('isAuthenticated');
    const userEmail = localStorage.getItem('userEmail');

    if (!userEmail || userEmail.trim() === '') {
      this.clearSession();
      return false;
    }

    return isAuth === 'true' && userEmail != null && userEmail.trim() !== '';

  }

  login(email: string): void {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userEmail', email);
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userEmail');
    }
    this.router.navigate(['/auth/login']);
  }

  getUserEmail(): string | null {
    if (!this.isBrowser()) {
      return null;
    }
    return localStorage.getItem('userEmail');
  }

  clearSession(): void {
    if (this.isBrowser()) {
      localStorage.clear();
    }
  }
}