import { CumpleaneroSuscrito } from "../Dominio/CumpleaneroSuscrito";
import { IPushSender } from "./IPushSender";
import { IService } from "./IService";

export class FelicitarActivosServices implements IService<CumpleaneroSuscrito> {

    pushSender: IPushSender;
    constructor(pushSender: IPushSender) {
        this.pushSender = pushSender;
    }

    execute<T>(s: CumpleaneroSuscrito): void {
        this.pushSender.enviarPush(1, 'felicidades push');
        console.log('Felicidades'+ s.nombre)
    }

}