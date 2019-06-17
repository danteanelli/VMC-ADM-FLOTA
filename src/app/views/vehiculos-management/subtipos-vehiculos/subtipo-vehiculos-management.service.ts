import { Injectable } from '@angular/core';
import { RequestService } from '../../../core/services';
import { Observable } from 'rxjs';

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

    public add(subtipo: any): Observable<any> {
        return this.requestService.post(`${this.subTipoURL}`, subtipo);
    }

    public update(id: any, subtipo: any): Observable<any> {
        return this.requestService.put(`${this.subTipoURL}/${id}`, subtipo);
    }

    public delete(id: any): Observable<any> {
        return this.requestService.delete(`${this.subTipoURL}/${id}`);
    }
}
