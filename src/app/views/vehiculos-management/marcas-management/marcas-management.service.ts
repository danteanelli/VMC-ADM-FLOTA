import { Injectable } from '@angular/core';
import { RequestService } from '../../../core/services';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MarcasManagementService {

    marcasURL = '/api/marcas';

    constructor(private requestService: RequestService) { }

    public getAll(): Observable<any> {
        let url = `${this.marcasURL}`;
        return this.requestService.get(url);
    }

    public get(id: any): Observable<any> {
        return this.requestService.get(`${this.marcasURL}/` + id);
    }

    public add(marca: any): Observable<any> {
        return this.requestService.post(`${this.marcasURL}`, marca);
    }

    public update(id: any, marca: any): Observable<any> {
        return this.requestService.put(`${this.marcasURL}/${id}`, marca);
    }

    public delete(id: any): Observable<any> {
        return this.requestService.delete(`${this.marcasURL}/${id}`);
    }
}
