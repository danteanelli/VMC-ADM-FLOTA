import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-usuarios-management-form',
    templateUrl: './usuarios-management-form.component.html',
    styleUrls: ['./usuarios-management-form.component.scss']
})
export class UsuariosManagementFormComponent implements OnInit {

    itemForm: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<UsuariosManagementFormComponent>,
                private fb: FormBuilder) { }

    ngOnInit() {
        this.buildItemForm(this.data.payload);
    }

    buildItemForm(item) {
        this.itemForm = this.fb.group({
            nombre: [item.nombre || '', Validators.required],
            apellido: [item.nombre || '', Validators.required],
            email: [item.nombre || '', Validators.required],
            password: [item.nombre || '', Validators.required],
            empresa: [item.nombre || '', Validators.required],
            nroCelular: [item.nombre || '', Validators.required]
        });
    }

    submit() {
        this.dialogRef.close(this.itemForm.value);
    }

}
