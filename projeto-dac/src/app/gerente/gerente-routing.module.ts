import { Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { HomeComponent } from "./home";

export const GerenteRoutes : Routes = [

    { path: 'gerente', component: HomeComponent, canActivate: [AuthGuard], data: {role: 'GERENTE'} }
]