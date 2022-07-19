import { Endereco } from "./endereco.model";
import { User } from "./user.model";

export class Cliente extends User{
        public cpf? : string;
        public salario? : number;
        public endereco? : Endereco;
        public aprovado? : boolean;
    //  public conta?: Conta;
    constructor(id?: number,nome ?: string, email?: string, senha?: string, perfil?: string, aprovado?: boolean, cpf?: string, salario?: number,endereco?: Endereco){
        super(id,nome,email,senha,perfil);
        this.salario = salario;
        this.cpf = cpf;
        if(endereco!== undefined){
            this.endereco = endereco;
        }else{
            this.endereco = new Endereco();
        }
        this.aprovado = aprovado;
           
    }
}
