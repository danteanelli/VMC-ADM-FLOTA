import { Injectable } from '@angular/core';
import { RequestService } from '../../../core/services';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TipoVehiculoManagementService {

    tipoURL = 'api/tiposequipo';

    constructor(private requestService: RequestService) { }

    public getAll(): Observable<any> {
        let url = `${this.tipoURL}`;
        return this.requestService.get(url);
    }

    public get(id: any): Observable<any> {
        return this.requestService.get(`${this.tipoURL}/` + id);
    }

    public add(tipo: any): Observable<any> {
        return this.requestService.post(`${this.tipoURL}`, tipo);
    }

    public update(id: any, tipo: any): Observable<any> {
        return this.requestService.put(`${this.tipoURL}/${id}`, tipo);
    }

    public delete(id: any): Observable<any> {
        return this.requestService.delete(`${this.tipoURL}/${id}`);
    }
}
