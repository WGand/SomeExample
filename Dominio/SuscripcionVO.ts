import { EstadoSuscripcion } from "./EstadoSuscripcion";
import { UsuarioVO } from "./UsuarioVO";

export class SuscripcionVO {
    SuscripcionId: number;
    usuarioId: UsuarioVO['UsuarioId'];
    fechaRenovacion: number;
    EstadoSuscripcion: EstadoSuscripcion;
}