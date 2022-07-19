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
    this.authService.aprovarCliente(cliente);
  }

  rejeitarCliente(cliente: Cliente){
    let index = this.gerente.clientes?.indexOf(cliente);
    if (index !== undefined)
      this.gerente.clientes?.splice(index, 1);
  }

  buscarCliente(cpf: string): Cliente | null{
    return this.authService.getClienteByCPF(cpf);
  }

  retornaClientes(): Cliente[] | undefined {
    let clientes: Cliente[] = [];
    if (this.gerente.clientes !== undefined){
      this.gerente.clientes.forEach(cliente => { 
        if (!cliente.aprovado)
          clientes.push(cliente); 
          console.log(cliente);
      })  
    };
    return clientes;
  }

  
}
