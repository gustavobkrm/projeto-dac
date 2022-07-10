import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login, User } from 'src/app/shared/models';

const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public get usuarioLogado(): User {
    let user = localStorage[LS_CHAVE];
    return(user? JSON.parse(localStorage[LS_CHAVE]) : null);
  };

  public set usuarioLogado(user: User) {
    localStorage[LS_CHAVE] = JSON.stringify(user);
  }; 
  
  logout() {
    delete localStorage[LS_CHAVE];
  };

  login(login: Login): Observable <User | null> {

    let user = new User(1, "Cliente", "clinte@email.com", "123456", 'CLIENTE');
    if (login.login == login.senha) {
      if (login.login == "admin") {
        user = new User(1, "Admin", login.login, login.senha, 'ADMIN');
      }
      else if (user.perfil == "GERENTE") {
        user = new User(1, "Gerente", login.login, login.senha, 'GERENTE');
      }
    
      return of(user);
    } 
    else if(login.login == "cliente@email.com" && login.senha == "123456") {
      return of(user);
    }
    else if(login.user?.login && login.user.senha) {
      console.log("cadastrou");
      return of(user);
    }
    else {
      return of(null);
    }
  }
  constructor() { }
}
