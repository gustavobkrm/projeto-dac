import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth';
import { Gerente } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gerentes !: Gerente[];
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.gerentes = this.authService.getAllGerentes();
    
  }
  getGerenteLength(gerente: Gerente) : number{
     if(gerente.clientes)
     return gerente.clientes?.length;
     return 0;
  }

}
