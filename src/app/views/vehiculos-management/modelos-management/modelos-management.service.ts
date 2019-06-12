import { Injectable } from '@angular/core';
import { RequestService } from '../../../core/services';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ModelosManagementService {

    modelosURL = '/api/modelos';

    constructor(private requestService: RequestService) { }

    public getAll(): Observable<any> {
        let url = `${this.modelosURL}`;
        return this.requestService.get(url);
    }

    public get(id: any): Observable<any> {
        return this.requestService.get(`${this.modelosURL}/` + id);
    }

    public add(modelo: any): Observable<any> {
        return this.requestService.post(`${this.modelosURL}`, modelo);
    }

    public update(id: any, modelo: any): Observable<any> {
        return this.requestService.put(`${this.modelosURL}/${id}`, modelo);
    }

    public delete(id: any): Observable<any> {
        return this.requestService.delete(`${this.modelosURL}/${id}`);
    }
}
