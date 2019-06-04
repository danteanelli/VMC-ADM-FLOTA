import { Perfil } from './perfil.model';

export class UsuarioModel {
    id: number;
    nombre: string;
    apellido: string;
    empresa: string;
    email: string;
    password: string;
    habilitado: boolean;
    nroCelular: string;
    perfil: Array<Perfil> = [];
    rememberMe: boolean;
}
