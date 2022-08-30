import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/';
import { DepositarComponent } from './depositar/depositar.component';
import { SaqueComponent } from './saque/saque.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { ClienteService } from './services/cliente.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    HomeComponent,
    DepositarComponent,
    SaqueComponent,
    TransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    HomeComponent,
    DepositarComponent,
    SaqueComponent,
    TransferenciaComponent,
    ExtratoComponent
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
