import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { DepositarComponent } from "./depositar";
import { ExtratoComponent } from "./extrato";
import { HomeComponent } from "./home";
import { SaldoComponent } from "./saldo";
import { SaqueComponent } from "./saque";
import { TransferenciaComponent } from "./transferencia";

export const ClienteRoutes : Routes = [

    { path: 'cliente', component: HomeComponent, canActivate: [AuthGuard], data: {role: 'CLIENTE'} },
    { path: 'depositar', component: DepositarComponent, canActivate: [AuthGuard], data: {role: 'CLIENTE'} },
    { path: 'extrato', component: ExtratoComponent, canActivate: [AuthGuard], data: {role: 'CLIENTE'} },
    { path: 'saldo', component: SaldoComponent, canActivate: [AuthGuard], data: {role: 'CLIENTE'} },
    { path: 'saque', component: SaqueComponent, canActivate: [AuthGuard], data: {role: 'CLIENTE'} },
    { path: 'transferencia', component: TransferenciaComponent, canActivate: [AuthGuard], data: {role: 'CLIENTE'} }
]