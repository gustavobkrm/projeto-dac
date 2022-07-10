import { Injectable } from '@angular/core';
import { Gerente, User } from 'src/app/shared/models';

const LS_CHAVE : string = "gerentes";
@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor() { }

  listAll() : Gerente[] {
    const gerentes = localStorage[LS_CHAVE];
    
    return gerentes ? JSON.parse(gerentes) : [];
  }

  insert(gerente: Gerente, user : User) : void {
    const gerentes = this.listAll();
    gerente.id = new Date().getTime();
    user.id = new Date().getTime();
    user.nome = gerente.nome;
    user.login = gerente.email;
    user.perfil = 'GERENTE';
    gerentes.push(gerente);
    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }

  findById(id: number) : Gerente | undefined {
    const gerentes = this.listAll();

    return gerentes.find(gerente => gerente.id === id);
  }

  update(gerente : Gerente, user : User) : void {
    const gerentes: Gerente[] = this.listAll();
    gerentes.forEach((obj, index, objs) => {
      if (gerente.id === obj.id) {
        objs[index] = gerente;
      }
    });

    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }
  
  delete(id: number) : void {
    let gerentes : Gerente[] = this.listAll();
    gerentes = gerentes.filter(gerente => gerente.id !== id);

    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }
}
