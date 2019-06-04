import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { UsuarioModel } from '../../models/usuario.model';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private authService: AuthService) { }

    get() {
        return this.authService.isAuthenticated();
    }
}
