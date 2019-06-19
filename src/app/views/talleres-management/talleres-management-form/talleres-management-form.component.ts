import {Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-talleres-management-form',
    templateUrl: './talleres-management-form.component.html',
    styleUrls: ['./talleres-management-form.component.scss']
})
export class TalleresManagementFormComponent implements OnInit {

    itemForm: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<TalleresManagementFormComponent>,
                private fb: FormBuilder) { }

    ngOnInit() {
        this.buildItemForm(this.data.payload);
    }

    buildItemForm(item) {
        this.itemForm = this.fb.group({
            nombre: [item.nombre || '', Validators.required],
            direccion: [item.direccion || '', Validators.required],
            telefono: [item.telefono || '', Validators.required],
            responsable: [item.responsable || '', Validators.required],
            cuit: [item.cuit || '', Validators.required]
        });
    }

    submit() {
        this.dialogRef.close(this.itemForm.value);
    }

}
