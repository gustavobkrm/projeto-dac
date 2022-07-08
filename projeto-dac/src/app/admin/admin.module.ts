import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGerenteComponent } from './list-gerente';
import { UpdateGerenteComponent } from './update-gerente';
import { CreateGerenteComponent } from './create-gerente';
import { HomeComponent } from './home';



@NgModule({
  declarations: [
    ListGerenteComponent,
    UpdateGerenteComponent,
    CreateGerenteComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListGerenteComponent,
    UpdateGerenteComponent,
    CreateGerenteComponent,
    HomeComponent
  ]
})
export class AdminModule { }
