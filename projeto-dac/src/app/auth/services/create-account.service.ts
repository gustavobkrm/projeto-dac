import { Injectable } from '@angular/core';
import { Cliente, User } from 'src/app/shared/models';

const LS_CHAVE : string = "account";

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  constructor() { }

  listAllClientes() : Cliente[] {

    const clientes = localStorage[LS_CHAVE];
    return clientes ? JSON.parse(clientes) : [];
  }

  listAllUsers() : User[] {
    const users = localStorage[LS_CHAVE];
    return users ? JSON.parse(users) : [];
  }

  insert(cliente : Cliente, user : User) : void {
    
    const clientes = this.listAllClientes();
    const users = this.listAllUsers();

    cliente.id = new Date().getTime();
    user.id = new Date().getTime();
    
    clientes.push(cliente);
    users.push(user);
    
    localStorage[LS_CHAVE] = JSON.stringify(clientes);
  }
}
