import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  isAuthenticated(): boolean {
    if (!this.isBrowser()) {
      return false;
    }
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  login(email: string): void {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userEmail', email);
  }

  logout(): void {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/auth/login']);
  }

  getUserEmail(): string | null {
    return localStorage.getItem('userEmail');
  }
}