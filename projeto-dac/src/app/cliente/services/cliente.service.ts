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

  saque(valor : number): Boolean{
    if(valor){
      if(this.cliente.conta?.saldoConta && this.cliente.conta?.limite){
        if(this.cliente.conta.saldoConta + this.cliente.conta.limite >= valor ){
          this.cliente.conta.saldoConta -= valor;
          this.authService.usuarioLogado = this.cliente;
          this.authService.updateUser(this.cliente);
          return true;
        }
      }
    }
    return false;
  }

  
  deposito(valor : number): Boolean{
    if(valor){
      if(this.cliente.conta?.saldoConta != null){
        this.cliente.conta.saldoConta += valor;
        this.authService.usuarioLogado = this.cliente;
        this.authService.updateUser(this.cliente);
        return true;
      }
    }
    return false;
  }

  transferencia(contaDest: number, valor : number): Boolean{
    let clienteDest = this.authService.getClienteByNumberAcount(contaDest);
    
    if(this.verificaSaldo(valor) && clienteDest != undefined){
        this.saque(valor);
        if(clienteDest){
          if(clienteDest.conta?.saldoConta != null){
            clienteDest.conta.saldoConta  += valor;
            this.authService.updateUser(clienteDest);
            return true;
          } 
        }
    }
    return false;
  }

  verificaSaldo(valor : number): Boolean{
    if(this.cliente.conta?.saldoConta && this.cliente.conta?.limite){
      if(this.cliente.conta.saldoConta + this.cliente.conta.limite >= valor){
        return true;
      }
    }
    return false;
  }
}
