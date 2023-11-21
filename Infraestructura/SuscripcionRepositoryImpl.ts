import { ISuscripcionRepository } from "../Dominio/ISuscripcionRepository";
import { Suscripcion } from "../Dominio/Suscripcion";

export class SuscripcionRepositoryImpl implements ISuscripcionRepository {
    buscarSuscripcion(id: number): Suscripcion {
        
        const suscripciones: Suscripcion = {id:1, usuario: 1, fechaRenovacion: 1, estado: 1}

        return suscripciones
    }

}