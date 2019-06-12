import { Modelo } from './modelo.model';

export class Marca {
    id: number;
    nombre: string;
    modelos: Array<Modelo>;
}
