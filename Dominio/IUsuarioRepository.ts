import { Usuario } from "./Usuario";
import { UsuarioVO } from "./UsuarioVO";

export interface IUsuarioRepository {
    buscarCumpleanero(fecha: UsuarioVO['FechaNacUsuario']): Iterable<Usuario>
}