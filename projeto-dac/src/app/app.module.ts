import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth'; 
import { ClienteModule } from './cliente/cliente.module';
import { AdminModule } from './admin';
import { GerenteModule } from './gerente';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ClienteModule,
    AdminModule,
    GerenteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
