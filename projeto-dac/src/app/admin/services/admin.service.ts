import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth';
import { Gerente, User } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  constructor(private authService: AuthService) { }

  insert(gerente: Gerente) : void {
    
    gerente.id = new Date().getTime();
    gerente.perfil = 'GERENTE';
    this.authService.adicionarUsuarios(gerente);
  
  }

  findById(id: number) : Gerente | null {
    return this.authService.getGerenteById(id);
  }

  update(gerente : Gerente) : void {
    this.authService.updateUser(gerente);
  }
  
  delete(id: number) : void {
    this.authService.deleteUserById(id);
  }

  listAllGerentes(): Gerente[] {
    return this.authService.getAllGerentes();
  }

}
