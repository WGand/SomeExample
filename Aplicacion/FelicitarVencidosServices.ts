import { CumpleaneroSuscrito } from "../Dominio/CumpleaneroSuscrito";
import { IService } from "./IService";

export class FelicitarVencidosServices implements IService<CumpleaneroSuscrito>{
    execute<T>(s: CumpleaneroSuscrito): void {
        console.log('FELICIDADES, PAGA')
    }

}