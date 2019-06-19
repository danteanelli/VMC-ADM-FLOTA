import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from '../../core/services';

import { Usuario } from '../../models/usuario.model';

@Injectable({
    providedIn: 'root'
})
export class UsuariosManagementService {

    usuarioURL = 'api/usuarios';

    constructor(private requestService: RequestService) { }

    public getAll(): Observable<any> {
        let url = `${this.usuarioURL}`;
        return this.requestService.get(url);
    }

    public get(id: any): Observable<any> {
        return this.requestService.get(`${this.usuarioURL}/` + id);
    }

    public add(usuario: Usuario): Observable<Usuario> {
        return this.requestService.post(`${this.usuarioURL}`, usuario);
    }

    public update(id: any, usuario: Usuario): Observable<Usuario> {
        return this.requestService.put(`${this.usuarioURL}/${id}`, usuario);
    }

    public delete(id: number): Observable<any> {
        return this.requestService.delete(`${this.usuarioURL}/${id}`);
    }

}
