import { CumpleaneroService } from "../Dominio/CumpleaneroService";
import { CumpleaneroSuscrito } from "../Dominio/CumpleaneroSuscrito";
import { IService } from "./IService";

export class FelicitarCumpleanerosService {
    servicios: IService<CumpleaneroSuscrito>[] = [];
    cumpleaneroService: CumpleaneroService;
    constructor(cumpleaneroService: CumpleaneroService) {
        this.cumpleaneroService = cumpleaneroService;
    }


    felicitarCumpleaneros(): void {
        let gente = this.cumpleaneroService.buscarCumpleaneros();
        for(let obj of gente){
            console.log(obj.nombre);
            this.servicios.forEach((element) =>{
                element.execute(obj);
            } )
        }
    }
}