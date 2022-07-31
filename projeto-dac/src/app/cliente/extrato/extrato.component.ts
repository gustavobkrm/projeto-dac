import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AuthService } from 'src/app/auth';
import { Cliente, User } from 'src/app/shared/models';
import { Operacao } from 'src/app/shared/models/operacao.model';
@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  cliente !: Cliente;
  dataInicio: string = '';
  dataFim: string = '';
  operacoes!: Operacao[];

  @ViewChild('formExtrato') formExtrato! : NgModel; 

  constructor(private authService : AuthService) {
  }
  
  ngOnInit(): void {
    this.cliente = this.authService.usuarioLogado;
    if(this.cliente.conta?.historico){
      this.operacoes = this.cliente.conta?.historico;
    } 
  }

  busca(){
    console.log(this.dataInicio);
    console.log(this.dataFim);

  }

}
