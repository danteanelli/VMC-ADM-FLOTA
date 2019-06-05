import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private authService: AuthService) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isAuthenticated()) {
            if (this.isTokenExpirado()) {
                this.authService.logout();
                this.router.navigate(['/sessions/signin']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/sessions/signin']);
        return false;
    }

    isTokenExpirado(): boolean {
        let token = this.authService.token;
        let payload = this.authService.obtenerDatosToken(token);
        let now = new Date().getTime() / 1000;
        if (payload.exp < now) {
            return true;
        }
        return false;
    }
}
