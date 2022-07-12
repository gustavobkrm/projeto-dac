import { Injectable } from '@angular/core';
import { Cliente, User, Endereco } from 'src/app/shared/models';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const LS_CHAVE : string = "account";
@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  enderecos! : Endereco;

  constructor(private http : HttpClient) { }

  listAllClientes() : Cliente[] {

    const clientes = localStorage[LS_CHAVE];
    return clientes ? JSON.parse(clientes) : [];
  }

  listAllUsers() : User[] {
    const users = localStorage[LS_CHAVE];
    return users ? JSON.parse(users) : [];
  }

  listAllEndereco() : Endereco[] {
    const enderecos = localStorage[LS_CHAVE];
    return enderecos ? JSON.parse(enderecos) : [];
  }

  insert(cliente : Cliente, user : User, endereco : Endereco) : void {
    
    const clientes = this.listAllClientes();
    const users = this.listAllUsers();
    const enderecos = this.listAllEndereco();

    cliente.id = new Date().getTime();
    user.id = new Date().getTime();
    endereco.id = new Date().getTime();
    user.nome = cliente.nome;
    user.login = cliente.email;
    user.perfil = 'CLIENTE';

    clientes.push(cliente);
    users.push(user);
    enderecos.push(endereco);
    
    
    localStorage[LS_CHAVE] = JSON.stringify(clientes);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
    localStorage[LS_CHAVE] = JSON.stringify(users);
  }

  consultaCEP(cep : string) {

    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(data => this.enderecos = this.completaEndereco(data));
      }
    }
    
    return of({});
  }

   private completaEndereco(data : any) : Endereco {
     
    let  endereco = new Endereco();

    endereco.cep = data.cep;
    endereco.logradouro = data.logradouro;
    endereco.complemento = data.complemento;
    endereco.bairro = data.bairro;
    endereco.cidade = data.localidade;
    endereco.estado = data.uf;

    console.log(endereco);
    return endereco;
    
  }
}
