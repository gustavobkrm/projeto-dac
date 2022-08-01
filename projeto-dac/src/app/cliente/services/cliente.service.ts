import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth';
import { Cliente } from 'src/app/shared/models';
import { Operacao } from 'src/app/shared/models/operacao.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  cliente!: Cliente;

  constructor(private authService: AuthService) { 
    this.cliente = authService.usuarioLogado; 
  }

  saque(valor : number, transferencia ?: boolean): Boolean{
    if(valor){
      if(this.cliente.conta?.saldoConta){
      if(this.cliente.conta?.limite){
        if(this.cliente.conta.saldoConta + this.cliente.conta.limite >= valor ){
          if(!transferencia) this.cadastraOperacao("SAQUE",valor);
          this.cliente.conta.saldoConta -= valor;
          this.authService.usuarioLogado = this.cliente;
          this.authService.updateUser(this.cliente);
          return true;
        }
      }else{
        if(this.cliente.conta.saldoConta >= valor ){
          if(!transferencia) this.cadastraOperacao("SAQUE",valor);
          this.cliente.conta.saldoConta -= valor;
          this.authService.usuarioLogado = this.cliente;
          this.authService.updateUser(this.cliente);
          return true;
        }
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
        this.cadastraOperacao("DEPOSITO",valor);
        return true;
      }
    }
    return false;
  }

  transferencia(contaDest: number, valor : number): Boolean{
    let clienteDest = this.authService.getClienteByNumberAcount(contaDest);

    if(this.verificaSaldo(valor)){
        if(clienteDest != undefined){
          this.saque(valor,true);
          if(clienteDest.conta?.saldoConta != null){
            clienteDest.conta.saldoConta  += valor;
            this.cadastraOperacao("TRANSFERENCIA",valor,clienteDest);
            return true;
          }
        }else{
         throw("Conta destino não encontrada");
        }
    }
    return false;
  }

  verificaSaldo(valor : number): Boolean{
    if(this.cliente.conta?.saldoConta){
      if(this.cliente.conta?.limite){
        if(this.cliente.conta.saldoConta + this.cliente.conta.limite >= valor){
          return true;
        }
        }else{
          if(this.cliente.conta.saldoConta >= valor){
            return true;
          } 
        }
      }
    return false;
  }

  cadastraOperacao(tipo : string, valor : number, destino?: Cliente){
    let operacao : Operacao;
    if(tipo == "TRANSFERENCIA"){
      if(destino && destino.conta){
        operacao = new Operacao(tipo,valor,destino.conta.conta,this.cliente.conta?.conta);
        console.log(operacao);
        destino?.conta?.historico?.push(operacao);
        this.cliente.conta?.historico?.push(operacao);
        this.authService.updateUser(destino);
      }     
    }else{
      operacao = new Operacao(tipo,valor,destino?.conta?.conta);
      if(this.cliente.conta?.historico == undefined){
        if(this.cliente.conta != null){
        this.cliente.conta.historico = [];
        this.cliente.conta?.historico?.push(operacao);
      }
      }else{
        this.cliente.conta?.historico?.push(operacao);
      }
    }
    console.log(this.cliente.conta?.historico);
  }

  filtroData(dataInicio : string, dataFim : string): Operacao[]{
      let operacoes : Operacao[] = [];
      if(this.cliente.conta?.historico){
        operacoes = this.cliente.conta?.historico.filter( operacao => { 
          let data;
          let Inicio = new Date(Number(dataInicio.slice(4,8)),Number(dataInicio.slice(2,4)),Number(dataInicio.slice(0,2)));
          let Fim = new Date(Number(dataFim.slice(4,8)),Number(dataFim.slice(2,4)),Number(dataFim.slice(0,2)),23,59,59);
          if(operacao.dataHoraMovimentacao){
            data = new Date(operacao.dataHoraMovimentacao);
            console.log(Inicio);
            console.log(Fim);
            console.log(data);
            if( (data.getTime() >= Inicio.getTime()) && (data.getTime() <= Fim.getTime()) ){
            return true;
            }
          }
          return false;
        });
      }
      return operacoes;
  }
}
