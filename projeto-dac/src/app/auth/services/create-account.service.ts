import { Injectable } from '@angular/core';
import { Cliente, User, Endereco } from 'src/app/shared/models';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { AuthService } from './auth.service';

const LS_CHAVE : string = "account";
@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  enderecos! : Endereco;

  constructor(private http : HttpClient,
              private authService: AuthService) { }

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

  insert(cliente : Cliente) : void {
    
    cliente.id = new Date().getTime();
    cliente.perfil = 'CLIENTE';
    
    
    this.authService.adicionarUsuarioPendente(cliente);
  }

  consultaCEP(cep : string) {

    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(data => this.enderecos = this.completaEndereco(data));
        
      }
    }
    return this.enderecos;
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
