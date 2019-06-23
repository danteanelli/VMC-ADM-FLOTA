import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-centro-de-costos-management-form',
    templateUrl: './centro-de-costos-management-form.component.html',
    styleUrls: ['./centro-de-costos-management-form.component.scss']
})
export class CentroDeCostosManagementFormComponent implements OnInit {

    itemForm: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<CentroDeCostosManagementFormComponent>,
                private fb: FormBuilder) { }

    ngOnInit() {
        this.buildItemForm(this.data.payload);
    }

    buildItemForm(item) {
        this.itemForm = this.fb.group({
            nroCentroCosto: [item.nroCentroCosto || '', Validators.required],
            descripcion: [item.descripcion || '', Validators.required]
        });
    }

    submit() {
        this.dialogRef.close(this.itemForm.value);
    }

}
