import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { BuscarClienteComponent } from './buscar-cliente/buscar-cliente.component';
import { Top5ClientesComponent } from './top5-clientes/top5-clientes.component';
import { GerenteService } from './services/gerente.service';



@NgModule({
  declarations: [
    HomeComponent,
    ListarClienteComponent,
    BuscarClienteComponent,
    Top5ClientesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ListarClienteComponent,
    BuscarClienteComponent,
    Top5ClientesComponent
  ],
  providers: [
    GerenteService
  ]
})
export class GerenteModule { }
