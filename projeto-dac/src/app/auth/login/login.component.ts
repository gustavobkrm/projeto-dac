import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/shared/models';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('formLogin') formLogin! : NgForm;
  login : Login = new Login();
  loading : boolean = false;
  message! : string;

  constructor(
    private authService : AuthService,
    private router : Router,
    private route : ActivatedRoute
  ) { 

    if (this.authService.usuarioLogado) {
      this.router.navigate( ["/home"]);
    }
  }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.message = params['error'];
    });
  }

  logar() : void {
    this.loading = true;
    if (this.formLogin.form.valid) {
      this.authService.login(this.login).subscribe((user) =>{
        if (user != null) {
          this.authService.usuarioLogado = user;
          this.loading = false;
          if (user.perfil === 'ADMIN') {
            this.router.navigate( ["/admin"]);
          }
          else if (user.perfil === 'GERENTE') {
            this.router.navigate( ["/gerente"]);
          }
          else if (user.perfil === 'CLIENTE') {
            this.router.navigate( ["/cliente"]);
          }
        } else {
          this.message = "Usuário e/ou senha inválidos.";
        }
      });
    }

    this.loading = false;
  }

}
