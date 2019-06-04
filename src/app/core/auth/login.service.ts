import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PrincipalService } from './principal.service';
import { AuthService } from './auth.service';
import { UtilityService } from '../services/utility.service';

import { UsuarioModel } from '../../models/usuario.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private principalService: PrincipalService,
                private authService: AuthService,
                private utilityService: UtilityService) {
    }

    login(usuario: UsuarioModel): Observable<any> {
        return this.authService.login(usuario);
    }

    logout() {
        this.authService.logout();
        this.principalService.cleanAuthentication();
        this.utilityService.navigateToLogin();
    }

}
