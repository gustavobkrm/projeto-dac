import { Component, OnInit } from '@angular/core';
import { Cliente, Gerente } from 'src/app/shared/models';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  
  clientes : Cliente[] | undefined = [];

  constructor(private gerenteService: GerenteService) { }

  ngOnInit(): void {
    this.clientes = this.retornaClientes();
  }

  aprovarCliente(cliente: Cliente){
    this.gerenteService.aprovarCliente(cliente);
    this.clientes = this.retornaClientes();
  }

  retornaClientes(): Cliente[] | undefined{
     return this.gerenteService.retornaClientes();
  }

  rejeitarCliente(cliente: Cliente){
      this.gerenteService.rejeitarCliente(cliente);
      this.clientes = this.retornaClientes();
  }
}
