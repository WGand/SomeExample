import { UsuarioVO } from "./UsuarioVO";

export class Usuario {
    id: UsuarioVO['UsuarioId'];
    nombre: UsuarioVO['NombreUsuario'];
    fechaNac: UsuarioVO['FechaNacUsuario'];
    email: UsuarioVO['email'];
}