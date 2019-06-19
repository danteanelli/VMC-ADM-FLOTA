import { Injectable } from '@angular/core';
import { RequestService } from '../../../core/services';
import { Observable } from 'rxjs';
import {TipoVehiculo} from '../../../models/tipoVehiculo.model';

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

    public add(tipoVehiculo: TipoVehiculo): Observable<TipoVehiculo> {
        return this.requestService.post(`${this.tipoURL}`, tipoVehiculo);
    }

    public update(id: any, tipoVehiculo: TipoVehiculo): Observable<TipoVehiculo> {
        return this.requestService.put(`${this.tipoURL}/${id}`, tipoVehiculo);
    }

    public delete(id: any): Observable<any> {
        return this.requestService.delete(`${this.tipoURL}/${id}`);
    }
}
