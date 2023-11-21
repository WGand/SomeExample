import { SuscripcionVO } from "./SuscripcionVO";

export class Suscripcion {
    id: SuscripcionVO['SuscripcionId'];
    usuario: SuscripcionVO['usuarioId'];
    fechaRenovacion: SuscripcionVO['fechaRenovacion'];
    estado: SuscripcionVO['EstadoSuscripcion'];
}