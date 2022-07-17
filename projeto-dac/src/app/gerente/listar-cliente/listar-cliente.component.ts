import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/models';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  constructor(private gerenteService: GerenteService) { }

  ngOnInit(): void {
  }

  aprovarCliente(cliente: Cliente){
    this.gerenteService.aprovarCliente(cliente);
  }
}
