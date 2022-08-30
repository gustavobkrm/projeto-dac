import { Cliente } from "./cliente.model";

export class Operacao{
    public dataHoraMovimentacao?: Date;
    
    constructor(
        public tipo ?: string,
        public valor ?: number,
        public contaDestino ?: number,
        public contaOrigem ?: number
    ){
        this.dataHoraMovimentacao = new Date();
    }
}