import { Injectable } from '@angular/core';
import { Cliente, User, Endereco } from 'src/app/shared/models';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { AuthService } from './auth.service';
import { Conta } from 'src/app/shared/models/conta.model';
import { NumberValueAccessor } from '@angular/forms';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';

const LS_CHAVE : string = "numberAccount";

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {
  enderecos! : Endereco;

  constructor(private http : HttpClient,
              private authService: AuthService) { }


  listAllEndereco() : Endereco[] {
    const enderecos = localStorage[LS_CHAVE];
    return enderecos ? JSON.parse(enderecos) : [];
  }

  public get numberAccount(): number {
    let number = localStorage[LS_CHAVE];
    return(number ? JSON.parse(localStorage[LS_CHAVE]) : null);
  };

  public set numberAccount(number: number) {
    localStorage[LS_CHAVE] = JSON.stringify(number);
  };

  generateNumber(){
    let number = this.numberAccount;
    console.log(this.numberAccount);
    if(!number){
      this.numberAccount = 2000;
      number = this.numberAccount;
      console.log("teste1");
    }else{
      this.numberAccount = ++number;
      console.log("teste2");
    }
    console.log(number);
    return number;
  }

  insert(cliente : Cliente) : void {
    
    cliente.id = new Date().getTime();
    cliente.perfil = 'CLIENTE';
    cliente = this.insertConta(cliente);
    console.log(cliente);
    //cliente.conta = metodo da Conta;
    
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

  private insertConta(cliente: Cliente) : Cliente{
      cliente.conta = new Conta();

      if (cliente.salario && cliente.salario >= 2000)
      cliente.conta.limite = cliente.salario/2;
      
      cliente.conta.conta = this.generateNumber();
      
    return cliente;
  }
}
