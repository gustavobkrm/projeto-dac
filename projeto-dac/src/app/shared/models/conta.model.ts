import { Operacao } from "./operacao.model";

export class Conta {

    constructor(
        public id? : number,
        public conta? : number,
        public criacao? : Date,
        public limite? : number,
        public historico? : Operacao[],
        public saldoConta : number = 0,
    ) {}
}
