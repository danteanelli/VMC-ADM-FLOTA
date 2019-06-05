import { TipoLicencia } from './tipoLicencia.model';

export class Chofer {
    id: number;
    dni: string;
    fotoDni: string;
    fotoLicenciaConducir: string;
    vtoLicenciaConducir: Date;
    tipoLicencia: TipoLicencia;
    tipoLicenci2: TipoLicencia;
    tipoLicencia3: TipoLicencia;
    nroLlaveMicroTrack: string;
}
