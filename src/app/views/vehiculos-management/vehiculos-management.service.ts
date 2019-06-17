import { Injectable } from '@angular/core';
import { RequestService } from '../../core/services';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class VehiculosManagementService {

    vehiculosURL = 'api/vehiculos';

    constructor(private requestService: RequestService) { }

    public getAll(): Observable<any> {
        let url = `${this.vehiculosURL}`;
        return this.requestService.get(url);
    }

    public get(id: any): Observable<any> {
        return this.requestService.get(`${this.vehiculosURL}/` + id);
    }

    public add(vehiculo: any): Observable<any> {
        return this.requestService.post(`${this.vehiculosURL}`, vehiculo);
    }

    public update(id: any, vehiculo: any): Observable<any> {
        return this.requestService.put(`${this.vehiculosURL}/${id}`, vehiculo);
    }

    public delete(id: any): Observable<any> {
        return this.requestService.delete(`${this.vehiculosURL}/${id}`);
    }
}
