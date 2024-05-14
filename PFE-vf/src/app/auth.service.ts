import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  setAuthentication(value: boolean) {
    this.isAuthenticated = value;
  }

  getAuthentication(): boolean {
    return this.isAuthenticated;
  }
  constructor() { }
}
