import { Cliente } from "./cliente.model";
import { Tipo } from "./enum/tipo";

export class Movimentacao {
    constructor (
        public id? : number,
        public dt_hr? : Date,
        public tipo? : Tipo,
        public cliente? : Cliente
    ) { }
}
