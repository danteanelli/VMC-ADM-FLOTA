import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { Usuario } from '../../../models/usuario.model';

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

    usuario: Usuario;
    authenticationError: boolean;

    signinForm: FormGroup;

    constructor(private loginService: LoginService,
                private authService: AuthService,
                private utilityService: UtilityService,
                private principalService: PrincipalService) {
        this.usuario = new Usuario();
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.signinForm = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
            rememberMe: new FormControl(false)
        });
    }

    signin() {
        const user = Object.assign({}, this.usuario, this.signinForm.value);

        this.submitButton.disabled = true;
        this.progressBar.mode = 'indeterminate';
        this.loginService.login(user).subscribe(
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

    }

}
