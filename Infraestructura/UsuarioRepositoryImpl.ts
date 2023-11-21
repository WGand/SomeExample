import { IUsuarioRepository } from "../Dominio/IUsuarioRepository";
import { Usuario } from "../Dominio/Usuario";

export class UsuarioRepositoryImpl implements IUsuarioRepository {
    buscarCumpleanero(fecha: number): Iterable<Usuario> {
        
        const usuarios: Usuario[] = [{id:1, nombre:'whatever',fechaNac:1,email:'whatever@gmail.com'}]

        return usuarios
    }

}