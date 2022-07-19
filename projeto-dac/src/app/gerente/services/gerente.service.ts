import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth';
import { Cliente, Gerente } from 'src/app/shared/models';

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

  buscarCliente(cpf: string): Cliente | null{
    return this.authService.getClienteByCPF(cpf);
  }

}
