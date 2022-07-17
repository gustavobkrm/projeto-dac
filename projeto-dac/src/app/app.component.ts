import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth';
import { User } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-dac';

  constructor(
    private router: Router, private authService: AuthService) { }
  
  get usuarioLogado(): User | null {
    return this.authService.usuarioLogado;
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}


