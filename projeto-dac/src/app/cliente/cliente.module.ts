import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/';
import { DepositarComponent } from './depositar/depositar.component';
import { SaqueComponent } from './saque/saque.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { SaldoComponent } from './saldo/saldo.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { ClienteService } from './services/cliente.service';



@NgModule({
  declarations: [
    HomeComponent,
    DepositarComponent,
    SaqueComponent,
    TransferenciaComponent,
    SaldoComponent,
    ExtratoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    DepositarComponent,
    SaqueComponent,
    TransferenciaComponent,
    SaldoComponent,
    ExtratoComponent
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
