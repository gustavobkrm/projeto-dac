import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { ClienteComponent } from './cliente/cliente/cliente.component';
import { HomeComponent } from './home';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: {role: 'ADMIN, GERENTE, CLIENTE'}},
  { path: 'depositar', component: ClienteComponent},
  { path: 'saque', component: ClienteComponent},
  { path: 'transferencia', component: ClienteComponent},
  { path: 'saldo', component: ClienteComponent},
  { path: 'extrato', component: ClienteComponent},
  ...LoginRoutes
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
