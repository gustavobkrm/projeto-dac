import { formatCurrency } from '@angular/common';
import { Injectable, OnInit } from '@angular/core';
import { find, from, min, Observable, of } from 'rxjs';
import { Cliente, Gerente, Login, User } from 'src/app/shared/models';

const LS_CHAVE: string = "usuarioLogado";
const LS_USUARIOS: string = "usuariosCadastrados";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
 
  
  constructor() {     
  console.log("component initialized"); 
  }

  ngOnInit() {
  }

  public get usuarioLogado(): User {
    let user = localStorage[LS_CHAVE];
    return(user? JSON.parse(localStorage[LS_CHAVE]) : null);
  };

  public set usuarioLogado(user: User) {
    localStorage[LS_CHAVE] = JSON.stringify(user);
  };

  public get usuariosCadastrados(): User[]{
    let users = localStorage[LS_USUARIOS];
    //MEGA GAMBIARRA QUE SERA RETIRADA QUANDO HOUVER BANCO DE DADOS
    
    if(users ==  []){
      users.push(new User(1, "Admin", "Admin", "Admin", 'ADMIN'));
    //users.push(new User(2, "Cliente", "cliente@email.com", "123456", 'CLIENTE'));
    //users.push(new User(3, "Gerente", "Gerente", "Gerente", 'GERENTE'));
    //users.push(new Gerente(4,"Gerente2","Gerente2","Gerente2","GERENTE","213213213",Array(new Cliente(),new Cliente())));
    //users.push(new Gerente(5,"Gerente3","Gerente3","Gerente3","GERENTE","213213213",Array(new Cliente(),new Cliente())));
    //users.push(new Cliente(6,"Cliente","Cliente","Cliente","CLIENTE","11047352905",1000));
    }

    return(users? JSON.parse(localStorage[LS_USUARIOS]) : null);
  };

  private set usuariosCadastrados(users: User[]) {
    localStorage[LS_USUARIOS] = JSON.stringify(users);
  };
  
  public adicionarUsuarios(user: User){
    let users = this.usuariosCadastrados;
    users.push(user);
    this.usuariosCadastrados = users;
  }

  logout() {
    delete localStorage[LS_CHAVE];
  };

  login(login: Login): Observable <User | null> {
   
    let users :User[] = this.usuariosCadastrados;
    let user;
    user = users.find(user =>  user.email == login.login && user.senha == login.senha);
    if(user != undefined){
      return of(user);
    }else{
      return of(null);
    }
   
  }
  getAllGerentes(): Gerente[]{
    let users: User[] = this.usuariosCadastrados;
    return users.filter(user => user.perfil == "GERENTE");
  }

  getAllClientes(): Cliente[]{
    let users: Cliente[] = this.usuariosCadastrados;
    return users.filter(user => user.perfil == "CLIENTE");
  }

  getGerenteByCliente(): Gerente{
    let gerentes: Gerente[] = this.getAllGerentes();
    let gerente: Gerente = new Gerente(); 
    
    from(
      gerentes
    ).pipe(
      min((ant, pro) =>  
      (ant?.clientes?.length !== undefined ? ant.clientes.length : 0)  < 
      (pro?.clientes?.length !== undefined ? pro.clientes.length : 0)  ? -1 : 1)
    )
    .subscribe( x => {  gerente = x });

      return gerente;
  }

  getGerenteById(id: number) {
    let gerentes = this.getAllGerentes();
    let gerente;
    gerente = gerentes.find(gerente => gerente.id == id );
    if(gerente){
      return gerente;
    }else{
      return null;
    }
  }
  deleteUserById(id: number){
    console.log(id);
    let users = this.usuariosCadastrados;
    users = users.filter(user => user.id !== id);
    this.usuariosCadastrados = users;
    
  }

  updateUser(user: User) {
    let users = this.usuariosCadastrados;
    users.forEach((obj, index, objs) => {
      if(obj.id == user.id){
        console.log(obj.nome);
        console.log(user.nome);
        objs[index] = user;
      }
    });
    this.usuariosCadastrados = users;
  }
  

  getClienteByCPF(cpf: string):Cliente | null{
    let clientes: Cliente[] = this.getAllClientes();
    let cliente; 
    cliente = clientes.find(cliente => cliente.cpf == cpf );
    if(cliente){
      return cliente;
    }else{
      return null;
    }
  }
  
  aprovarCliente(cliente: Cliente) {
    let users :User[] = this.usuariosCadastrados;
    cliente.aprovado = true;
    users.push(cliente);
    this.usuariosCadastrados = users;
  }

  adicionarUsuarioPendente(cliente: Cliente) {
    let gerente = this.getGerenteByCliente();
    gerente.clientes?.push(cliente);
    this.updateUser(gerente);
  }

}
