import { Injectable } from '@angular/core';
import { RequestService } from '../../core/services';
import { Observable } from 'rxjs';
import { CentroDeCosto } from '../../models/centroDeCosto.model';

@Injectable({
    providedIn: 'root'
})
export class CentroDeCostosManagementService {

    centroCostosURL = 'api/centrocostos';

    constructor(private requestService: RequestService) { }

    public getAll(): Observable<any> {
        let url = `${this.centroCostosURL}`;
        return this.requestService.get(url);
    }

    public get(id: any): Observable<any> {
        return this.requestService.get(`${this.centroCostosURL}/` + id);
    }

    public add(centroDeCosto: CentroDeCosto): Observable<CentroDeCosto> {
        return this.requestService.post(`${this.centroCostosURL}`, centroDeCosto);
    }

    public update(id: any, centroDeCosto: CentroDeCosto): Observable<CentroDeCosto> {
        return this.requestService.put(`${this.centroCostosURL}/${id}`, centroDeCosto);
    }

    public delete(id: number): Observable<any> {
        return this.requestService.delete(`${this.centroCostosURL}/${id}`);
    }
}
