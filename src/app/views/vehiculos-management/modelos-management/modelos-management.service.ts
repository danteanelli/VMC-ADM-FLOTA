import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Servicio
import { RequestService } from '../../../core/services';

// Modelo - Clase
import { Modelo } from '../../../models/modelo.model';

@Injectable({
    providedIn: 'root'
})
export class ModelosManagementService {

    modelosURL = 'api/modelos';

    constructor(private requestService: RequestService) { }

    public getAll(): Observable<any> {
        let url = `${this.modelosURL}`;
        return this.requestService.get(url);
    }

    public get(id: any): Observable<any> {
        return this.requestService.get(`${this.modelosURL}/` + id);
    }

    public add(modelo: Modelo): Observable<Modelo> {
        return this.requestService.post(`${this.modelosURL}`, modelo);
    }

    public update(id: any, modelo: Modelo): Observable<Modelo> {
        return this.requestService.put(`${this.modelosURL}/${id}`, modelo);
    }

    public delete(id: any): Observable<any> {
        return this.requestService.delete(`${this.modelosURL}/${id}`);
    }
}
