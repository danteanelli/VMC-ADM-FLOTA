import { Injectable } from '@angular/core';
import { RequestService } from '../../../core/services';
import { Observable } from 'rxjs';
import { Perfil } from '../../../models/perfil.model';

@Injectable({
    providedIn: 'root'
})
export class PerfilesManagementService {

    perfilesURL = 'api/perfiles';

    constructor(private requestService: RequestService) { }

    public getAll(): Observable<any> {
        let url = `${this.perfilesURL}`;
        return this.requestService.get(url);
    }

    public get(id: any): Observable<any> {
        return this.requestService.get(`${this.perfilesURL}/` + id);
    }

    public add(perfil: Perfil): Observable<Perfil> {
        return this.requestService.post(`${this.perfilesURL}`, perfil);
    }

    public update(id: any, perfil: Perfil): Observable<Perfil> {
        return this.requestService.put(`${this.perfilesURL}/${id}`, perfil);
    }

    public delete(id: number): Observable<any> {
        return this.requestService.delete(`${this.perfilesURL}/${id}`);
    }

}
