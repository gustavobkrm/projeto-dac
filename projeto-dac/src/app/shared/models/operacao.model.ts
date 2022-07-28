import { Cliente } from "./cliente.model";

export class Operacao{
    
    constructor(
        public hora_movimentacao?: Date,
        public tipo ?: string,
        public clienteDestino ?: Cliente,
        public valor ?: number
    ){}
}