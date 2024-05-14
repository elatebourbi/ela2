import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  
  password = '00587569';

  authenticate(): void {
    if ( this.password === '00587569') {
      this.authService.setAuthentication(true);
    } else {
      alert('mot de passe incorrect');
    }
  }
}
