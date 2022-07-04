import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './auth';
import { User } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-dac';

  constructor(
    private router: Router, private loginService: LoginService) { }
  
  get usuarioLogado(): User | null {
    return this.loginService.usuarioLogado;
  }
  
  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}


