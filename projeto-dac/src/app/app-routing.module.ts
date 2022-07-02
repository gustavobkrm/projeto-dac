import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
//  { path: '',
//    component: LoginScreenComponent },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full' },
//  { path: 'home',
//    component: HomeComponent,
//    canActivate: [AuthGuard],
//    data: {
//      role: 'ADMIN,GERENTE,CLIENTE'} 
//    },
  ...LoginRoutes
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
