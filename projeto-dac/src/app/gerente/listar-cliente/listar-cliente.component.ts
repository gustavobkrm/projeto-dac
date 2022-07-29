import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/shared/models';
import { GerenteService } from '../services/gerente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  
  @ViewChild('formFiltrar') formFiltrar! : NgForm;

  clientes : Cliente[] | undefined = [];

  constructor(private gerenteService : GerenteService) { }

  ngOnInit(): void {
    this.clientes = this.retornaClientes();
  }

  retornaClientes(): Cliente[] | undefined{
    return this.gerenteService.retornaClientes();
 }

  filtrar() {
    
  }

}
