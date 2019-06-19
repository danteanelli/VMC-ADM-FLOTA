import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Servicio
import { RequestService } from '../../core/services';

// Clase - Modelo
import { Taller } from '../../models/taller.model';

@Injectable({
    providedIn: 'root'
})
export class TalleresManagementService {

    talleresURL = 'api/talleres';

    constructor(private requestService: RequestService) { }

    public getAll(): Observable<any> {
        let url = `${this.talleresURL}`;
        return this.requestService.get(url);
    }

    public get(id: any): Observable<any> {
        return this.requestService.get(`${this.talleresURL}/` + id);
    }

    public add(taller: Taller): Observable<Taller> {
        return this.requestService.post(`${this.talleresURL}`, taller);
    }

    public update(id: any, taller: Taller): Observable<Taller> {
        return this.requestService.put(`${this.talleresURL}/${id}`, taller);
    }

    public delete(id: number): Observable<any> {
        return this.requestService.delete(`${this.talleresURL}/${id}`);
    }
}
