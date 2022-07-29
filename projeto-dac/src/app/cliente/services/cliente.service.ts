import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth';
import { Cliente } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  cliente!: Cliente;

  constructor(private authService: AuthService) { 
    this.cliente = authService.usuarioLogado; 
  }

  private saque(valor : number){
    if(valor){
      if(this.cliente.conta?.saldoConta){
        this.cliente.conta.saldoConta -= valor;
      }
    }
    this.authService.updateUser(this.cliente);
  }

  private saqueLimite(valor: number){
    if(this.cliente.conta?.limite){
      if(this.cliente.conta?.limite >= valor){
        this.cliente.conta.saldoConta -= valor;
      }
    }
    this.authService.updateUser(this.cliente);
  }
  
  deposito(valor : number){
    if(valor){
      if(this.cliente.conta?.saldoConta){
        this.cliente.conta.saldoConta += valor;
      }
    }
    this.authService.updateUser(this.cliente);
  }

  getSaldo(): number{
    if(this.cliente.conta?.saldoConta)
      return this.cliente.conta?.saldoConta;
      return 0;
  }

  getLimite(): number{
    if(this.cliente.conta?.limite)
      return this.cliente.conta?.limite;
      return 0;
  }

  transferencia(contaDest: number, valor : number){
    let clienteDest;
    if(this.verificaSaldo(valor)){
        clienteDest = this.authService.getClienteByNumberAcount(contaDest);

        if(clienteDest){
          if(clienteDest.conta?.saldoConta){
            clienteDest.conta.saldoConta  += valor;
            this.authService.updateUser(clienteDest);
          } 
        }
    }
  }

  verificaSaldo(valor : number): Boolean{
    if(this.cliente.conta?.saldoConta){
      if(this.cliente.conta.saldoConta >= valor){
        this.saque(valor);
        return true;
      }else{
        if(this.verificaLimite(valor)){
          return true;
        }else{
          return false;
        }    
      }
    }
    return false;
  }

  verificaLimite(valor: number): Boolean{
    if(this.cliente.conta?.limite){
      if(this.cliente.conta?.limite >= valor){
        this.saqueLimite(valor);
        return true
      }else{
        return false;
      }
    }
    return true;
  }
}
