export class Usuario {
    id: number;
    nombre: string;
    apellido: string;
    empresa: string;
    username: string;
    password: string;
    habilitado: boolean;
    nroCelular: string;
    perfil: string[] = [];
    rememberMe: boolean;
}
