import { Component, OnInit } from '@angular/core';
import { Cliente, User } from 'src/app/shared/models';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clientes : Cliente[] | undefined = [];
  users: User[] = [];
  constructor(private gerenteService: GerenteService) { }

  ngOnInit(): void {
    this.clientes = this.retornaClientes();
    console.log(this.clientes);
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
