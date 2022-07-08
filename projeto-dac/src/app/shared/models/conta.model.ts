import { Cliente } from "./cliente.model";

export class Conta {
    constructor(
        public id? : number,
        public conta? : number,
        public criacao? : Date,
        public limite? : number,
        public cliente? : Cliente
    ) {}
}
