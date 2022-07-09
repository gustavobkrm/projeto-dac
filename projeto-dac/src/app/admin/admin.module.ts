import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGerenteComponent } from './list-gerente';
import { UpdateGerenteComponent } from './update-gerente';
import { CreateGerenteComponent } from './create-gerente';
import { HomeComponent } from './home';
import { AdminService } from './services/admin.service';
import { ModalGerenteComponent } from './modal-gerente/modal-gerente.component';
import { NumericoDirective } from '../shared/directives/numerico.directive';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { RouterModule } from '@angular/router';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};



@NgModule({
  declarations: [
    ListGerenteComponent,
    UpdateGerenteComponent,
    CreateGerenteComponent,
    HomeComponent,
    ModalGerenteComponent,
    NumericoDirective
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    RouterModule
  ],
  exports: [
    ListGerenteComponent,
    UpdateGerenteComponent,
    CreateGerenteComponent,
    HomeComponent
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
