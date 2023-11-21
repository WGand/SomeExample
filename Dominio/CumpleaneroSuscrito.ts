import { SuscripcionVO } from "./SuscripcionVO";
import { UsuarioVO } from "./UsuarioVO";

export class CumpleaneroSuscrito {
    usuarioId: UsuarioVO['UsuarioId'];
    nombre: UsuarioVO['NombreUsuario'];
    email: UsuarioVO['email'];
    suscripcion: SuscripcionVO['SuscripcionId'];
    estado: SuscripcionVO['EstadoSuscripcion'];

    constructor(usuarioId: UsuarioVO['UsuarioId'], nombre: UsuarioVO['NombreUsuario'], email: UsuarioVO['email'],
    suscripcion: SuscripcionVO['SuscripcionId'], estado: SuscripcionVO['EstadoSuscripcion']) {
        this.usuarioId = usuarioId;
        this.nombre = nombre;
        this.email = email;
        this.suscripcion = suscripcion;
        this.estado = estado;
    }
}