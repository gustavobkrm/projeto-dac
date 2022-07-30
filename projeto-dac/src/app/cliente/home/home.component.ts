import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth';
import { Cliente } from 'src/app/shared/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepositarComponent } from '../depositar';
import { SaqueComponent } from '../saque';
import { TransferenciaComponent } from '../transferencia';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private authService : AuthService, private modalService : NgbModal) { }
  
  usuarioLogado = this.authService.usuarioLogado;
  usuarioId = this.authService.usuarioLogado.id as number;
  cliente = this.authService.getClienteById(this.usuarioId);
  clientes : Cliente[] | undefined = [];

  ngOnInit(): void {
  }

  depositar() {
    const modalRef = this.modalService.open(DepositarComponent);

  }

  saque() {
    const modalRef = this.modalService.open(SaqueComponent);

   }

   transferir() {
    const modalRef = this.modalService.open(TransferenciaComponent);
    
   }

}
