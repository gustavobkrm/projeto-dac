import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth';
import { Cliente } from 'src/app/shared/models';
import { GerenteService } from '..';

@Component({
  selector: 'app-top5-clientes',
  templateUrl: './top5-clientes.component.html',
  styleUrls: ['./top5-clientes.component.css']
})
export class Top5ClientesComponent implements OnInit {  
    clientes : Cliente[] | undefined = [];
  
    constructor(private authService : AuthService, private gerenteService: GerenteService) { }
  
    ngOnInit(): void {
      this.clientes = this.retornaTopCinco();
    }
  
    retornaClientes(): Cliente[] | undefined{
       return this.authService.getAllClientes();
    }

    retornaTopCinco(): Cliente[] | undefined{
      return this.gerenteService.retornaTopCinco(this.retornaClientes());
    }
  
  }