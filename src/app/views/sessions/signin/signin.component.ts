import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { UsuarioModel } from '../../../models/usuario.model';

import { LoginService, AuthService, PrincipalService } from '../../../core/auth';
import { UtilityService } from '../../../core/services';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    @ViewChild(MatProgressBar) progressBar: MatProgressBar;
    @ViewChild(MatButton) submitButton: MatButton;

    usuario: UsuarioModel;
    authenticationError: boolean;

    signinForm: FormGroup;

    constructor(private loginService: LoginService,
                private authService: AuthService,
                private utilityService: UtilityService,
                private principalService: PrincipalService) {
        this.usuario = new UsuarioModel();
    }

    ngOnInit() {
    }

    signin() {
        console.log(this.usuario);
        if (this.usuario.email == null || this.usuario.password == null) {
            console.log('Error Login', 'Username o password vacías!', 'error');
            return;
        }
        this.loginService.login(this.usuario).subscribe(
            result => {
                this.authService.guardarUsuario(result.access_token);
                this.authService.guardarToken(result.access_token);

                this.authenticationError = false;
                this.principalService.authenticated = true;
                let usuario = this.authService.usuario;
                this.utilityService.navigateToHome();
            },
            error => this.authenticationError = true
        );
        const signinData = this.signinForm.value
        console.log(signinData);

        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
    }

}
