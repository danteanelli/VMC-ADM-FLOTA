import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

// Servicios
import { PerfilesManagementService } from '../perfiles-management/perfiles-management.service';

// Clase - Modelo
import { Perfil } from '../../../models/perfil.model';

@Component({
    selector: 'app-usuarios-management-form',
    templateUrl: './usuarios-management-form.component.html',
    styleUrls: ['./usuarios-management-form.component.scss']
})
export class UsuariosManagementFormComponent implements OnInit {

    itemForm: FormGroup;

    perfiles: Perfil[];

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<UsuariosManagementFormComponent>,
                private fb: FormBuilder,
                private perfilesService: PerfilesManagementService) { }

    ngOnInit() {
        this.buildItemForm(this.data.payload);
        this.getPerfiles();
    }

    buildItemForm(item) {
        this.itemForm = this.fb.group({
            nombre: [item.nombre || '', Validators.required],
            apellido: [item.apellido || '', Validators.required],
            email: [item.email || '', Validators.required],
            password: [item.password || '', Validators.required],
            empresa: [item.empresa || '', Validators.required],
            nroCelular: [item.nroCelular || '', Validators.required]
        });
    }

    submit() {
        this.dialogRef.close(this.itemForm.value);
    }

    getPerfiles() {
        this.perfilesService.getAll().subscribe( value => {
                this.perfiles = value;
            },
            error => {
                console.log('error al obtener los perfiles');
            });
    }

}
