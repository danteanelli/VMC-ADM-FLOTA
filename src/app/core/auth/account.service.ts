import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private authService: AuthService) { }

    get() {
        return this.authService.isAuthenticated();
    }
}
