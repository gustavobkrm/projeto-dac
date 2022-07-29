import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth';
import { Cliente, Gerente } from 'src/app/shared/models';

const LS_CHAVE = "clientes";
@Injectable({
  providedIn: 'root'
})
export class GerenteService {
  gerente!: Gerente;

  constructor(private authService: AuthService) { 
    this.gerente = authService.usuarioLogado; 
  }
  
  aprovarCliente(cliente: Cliente) {
    cliente.aprovado = true;
    this.gerente.clientes?.forEach((obj) => {
      if(obj.id == cliente.id){
        obj = cliente;
      }
    });
    this.authService.adicionarUsuarios(cliente);
    this.authService.usuarioLogado = this.gerente;
    this.authService.updateUser(this.gerente);
  }

  rejeitarCliente(cliente: Cliente){
    this.gerente.clientes = this.gerente.clientes?.filter(value => value.id != cliente.id);
    this.authService.usuarioLogado = this.gerente;
    this.authService.updateUser(this.gerente);
  }

  buscarCliente(cpf: string): Cliente | null{
    return this.authService.getClienteByCPF(cpf);
  }

  retornaClientes(): Cliente[] | undefined {
    let clientes: Cliente[] = [];
    console.log('teste');
   console.log(this.gerente.clientes);
    if (this.gerente.clientes !== undefined){
      this.gerente.clientes.forEach(cliente => { 
        if (!cliente.aprovado)
          clientes.push(cliente); 
      })  
    };

    return clientes;
  }

  retornaTopCinco(clientes: Cliente[] | undefined): Cliente[] | undefined {
    let listClientes: Cliente[] | undefined = [];    
    if (clientes !== undefined){
      listClientes = clientes.sort(function (a, b) {
        if (a.conta?.saldoConta === undefined) return 1;
        if (b.conta?.saldoConta === undefined) return -1;
        if (a.conta?.saldoConta === b.conta.saldoConta) return 0;
        return a.conta.saldoConta < b.conta.saldoConta ? 1 : -1;
      }).slice(0,5);
    }
    console.log(listClientes);
      return listClientes;
  } 

  
}
