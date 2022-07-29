import { Operacao } from "./operacao.model";

export class Conta {
    public static numero: number = 1000;

    constructor(
        public id? : number,
        public conta? : number,
        public criacao? : Date,
        public limite? : number,
        public historico? : Operacao[],
        public saldoConta : number = 0,
    ) {
        this.conta = Conta.generateNumber();
    }

    public static generateNumber(): number{
        return this.numero++;
    }
}
