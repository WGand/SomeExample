import { CumpleaneroSuscrito } from "../Dominio/CumpleaneroSuscrito";
import { ISuscripcionRepository } from "../Dominio/ISuscripcionRepository";
import { IEmailSender } from "./IEmailSender";
import { IService } from "./IService";

export class FelicitarRecienVecidosServices implements IService<CumpleaneroSuscrito> {

    suscripcionRepo: ISuscripcionRepository;
    emailSender: IEmailSender;

    constructor(suscripcionRepo: ISuscripcionRepository, emailSender: IEmailSender){
        this.suscripcionRepo = suscripcionRepo;
        this.emailSender = emailSender;
    }

    execute<T>(s: CumpleaneroSuscrito): void {
        console.log('Felicidades '+ s.nombre +' , paga')
    }

}