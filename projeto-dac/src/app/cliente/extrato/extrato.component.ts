import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AuthService } from 'src/app/auth';
@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  @ViewChild('formExtrato') formExtrato! : NgModel;
  
  constructor(private authService : AuthService) { }
  
  usuarioLogado = this.authService.usuarioLogado;
  usuarioId = this.authService.usuarioLogado.id as number;
  cliente = this.authService.getClienteById(this.usuarioId);

  ngOnInit(): void {
  }

}
