import { Endereco } from "./endereco.model";

export class Cliente {
    constructor (
        public id? : number,
        public nome? : string,
        public email? : string,
        public cpf? : number,
        public salario? : number,
        public endereco? : Endereco
    ) {}
}
