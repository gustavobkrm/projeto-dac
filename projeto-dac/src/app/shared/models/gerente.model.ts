import { Cliente } from "./cliente.model";

export class Gerente {
    constructor (
        public id? : number,
        public nome? : string,
        public email? : string,
        public cpf? : number,
        public cliente? : Cliente
    ) {}
}
