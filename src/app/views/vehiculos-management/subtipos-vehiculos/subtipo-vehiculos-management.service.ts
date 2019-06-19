import { Injectable } from '@angular/core';
import { RequestService } from '../../../core/services';
import { Observable } from 'rxjs';
import {SubTipoVehiculo} from '../../../models/subTipoVehiculo.model';

@Injectable({
    providedIn: 'root'
})
export class SubtipoVehiculosManagementService {

    subTipoURL = 'api/subtiposequipo';

    constructor(private requestService: RequestService) { }

    public getAll(): Observable<any> {
        let url = `${this.subTipoURL}`;
        return this.requestService.get(url);
    }

    public get(id: any): Observable<any> {
        return this.requestService.get(`${this.subTipoURL}/` + id);
    }

    public add(subtipo: SubTipoVehiculo): Observable<SubTipoVehiculo> {
        return this.requestService.post(`${this.subTipoURL}`, subtipo);
    }

    public update(id: any, subtipo: SubTipoVehiculo): Observable<SubTipoVehiculo> {
        return this.requestService.put(`${this.subTipoURL}/${id}`, subtipo);
    }

    public delete(id: any): Observable<any> {
        return this.requestService.delete(`${this.subTipoURL}/${id}`);
    }
}
