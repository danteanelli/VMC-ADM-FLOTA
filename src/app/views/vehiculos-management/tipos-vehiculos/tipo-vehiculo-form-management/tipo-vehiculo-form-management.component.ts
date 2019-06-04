import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-tipo-vehiculo-form-management',
    templateUrl: './tipo-vehiculo-form-management.component.html',
    styleUrls: ['./tipo-vehiculo-form-management.component.scss']
})
export class TipoVehiculoFormManagementComponent implements OnInit {

    public itemForm: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<TipoVehiculoFormManagementComponent>,
                private fb: FormBuilder) { }

    ngOnInit() {
        this.buildItemForm(this.data.payload);
    }

    buildItemForm(item) {
        this.itemForm = this.fb.group({
            nombre: [item.name || '', Validators.required]
        });
    }

    submit() {
        this.dialogRef.close(this.itemForm.value);
    }

}
