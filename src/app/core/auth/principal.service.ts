import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

import { UtilityService } from '../services';
import { Usuario } from '../../models/usuario.model';
import { AccountService } from './account.service';

@Injectable({
    providedIn: 'root'
})
export class PrincipalService {

    private userIdentity: Usuario;
    private authenticationState = new Subject<Usuario>();

    authenticated = true;

    constructor(private utilityService: UtilityService,
                private accountService: AccountService) { }

    cleanAuthentication() {
        this.userIdentity = undefined;
        this.authenticated = false;
        this.authenticationState.next(this.userIdentity);
    }

    getIdentity(): Observable<Usuario> {
        if (this.userIdentity) return of(this.userIdentity);

        if (this.accountService.get()) {
            this.authenticated = true;
            this.utilityService.navigateToHome();
        } else {
            this.authenticated = false;
            this.utilityService.navigateToLogin();
        }
    }

    getAuthenticationState(): Observable<Usuario> {
        return this.authenticationState.asObservable();
    }
}
