import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { HomeComponent } from "./home";

export const ClienteRoutes : Routes = [

    { path: 'cliente', component: HomeComponent, canActivate: [AuthGuard], data: {role: 'CLIENTE'} }
]