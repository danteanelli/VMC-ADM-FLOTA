import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UtilityService } from '../services/utility.service';
import { AuthService } from './auth.service';
import { UsuarioModel } from '../../models/usuario.model';
import { AccountService } from './account.service';

@Injectable({
    providedIn: 'root'
})
export class PrincipalService {

    private userIdentity: UsuarioModel;
    private authenticationState = new Subject<UsuarioModel>();

    authenticated = true;

    constructor(private utilityService: UtilityService,
                private accountService: AccountService) { }

    cleanAuthentication() {
        this.userIdentity = undefined;
        this.authenticated = false;
        this.authenticationState.next(this.userIdentity);
    }

    getIdentity(): Observable<UsuarioModel> {
        if (this.userIdentity) return of(this.userIdentity);

        if (this.accountService.get()) {
            this.authenticated = true;
            this.utilityService.navigateToHome();
        } else {
            this.authenticated = false;
            this.utilityService.navigateToLogin();
        }
    }

    getAuthenticationState(): Observable<UsuarioModel> {
        return this.authenticationState.asObservable();
    }
}
