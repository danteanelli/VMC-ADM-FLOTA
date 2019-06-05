import {Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-perfiles-management-form',
    templateUrl: './perfiles-management-form.component.html',
    styleUrls: ['./perfiles-management-form.component.scss']
})
export class PerfilesManagementFormComponent implements OnInit {

    itemForm: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<PerfilesManagementFormComponent>,
                private fb: FormBuilder) { }

    ngOnInit() {
        this.buildItemForm(this.data.payload);
    }

    buildItemForm(item) {
        this.itemForm = this.fb.group({
            nombre: [item.nombre || '', Validators.required]
        });
    }

    submit() {
        this.dialogRef.close(this.itemForm.value);
    }

}
