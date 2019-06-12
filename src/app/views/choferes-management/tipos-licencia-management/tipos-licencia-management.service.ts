import { Injectable } from '@angular/core';
import { RequestService } from '../../../core/services';
import { Observable } from 'rxjs';
import { TipoLicencia } from '../../../models/tipoLicencia.model';

@Injectable({
    providedIn: 'root'
})
export class TiposLicenciaManagementService {

    tipoLicenciaURL = 'api/tiposlicencia';

    constructor(private requestService: RequestService) { }

    public getAll(): Observable<any> {
        let url = `${this.tipoLicenciaURL}`;
        return this.requestService.get(url);
    }

    public get(id: any): Observable<any> {
        return this.requestService.get(`${this.tipoLicenciaURL}/` + id);
    }

    public add(tipoLicencia: TipoLicencia): Observable<TipoLicencia> {
        return this.requestService.post(`${this.tipoLicenciaURL}`, tipoLicencia);
    }

    public update(id: any, tipoLicencia: TipoLicencia): Observable<TipoLicencia> {
        return this.requestService.put(`${this.tipoLicenciaURL}/${id}`, tipoLicencia);
    }

    public delete(id: number): Observable<any> {
        return this.requestService.delete(`${this.tipoLicenciaURL}/${id}`);
    }
}
