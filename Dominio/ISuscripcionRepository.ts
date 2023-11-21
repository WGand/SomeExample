import { Suscripcion } from "./Suscripcion";
import { UsuarioVO } from "./UsuarioVO";

export interface ISuscripcionRepository {
    buscarSuscripcion(id: UsuarioVO['UsuarioId']): Suscripcion
}