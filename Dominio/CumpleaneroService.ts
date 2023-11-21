import { CumpleaneroSuscrito } from "./CumpleaneroSuscrito";
import { ISuscripcionRepository } from "./ISuscripcionRepository";
import { IUsuarioRepository } from "./IUsuarioRepository";

export class CumpleaneroService {

    private userRepo: IUsuarioRepository;
    private suscripcionRepo: ISuscripcionRepository;

    constructor(userRepo: IUsuarioRepository, suscripcionRepo: ISuscripcionRepository){
        this.userRepo = userRepo;
        this.suscripcionRepo = suscripcionRepo;
    }

    buscarCumpleaneros(): Iterable<CumpleaneroSuscrito> {
        let paramObj: CumpleaneroSuscrito[] = [];
        const user = this.userRepo.buscarCumpleanero(1);
        const sus = this.suscripcionRepo.buscarSuscripcion(1);
        for (let obj of user) {
            paramObj.push(new CumpleaneroSuscrito(obj.id, obj.nombre, obj.email, sus.id, sus.estado))
        }
        
        return paramObj;
    }
}