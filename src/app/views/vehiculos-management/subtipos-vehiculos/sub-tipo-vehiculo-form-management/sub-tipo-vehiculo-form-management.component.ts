import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-sub-tipo-vehiculo-form-management',
    templateUrl: './sub-tipo-vehiculo-form-management.component.html',
    styleUrls: ['./sub-tipo-vehiculo-form-management.component.scss']
})
export class SubTipoVehiculoFormManagementComponent implements OnInit {

    public itemForm: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<SubTipoVehiculoFormManagementComponent>,
                private fb: FormBuilder) { }

    ngOnInit() {
        this.buildItemForm(this.data.payload);
    }

    buildItemForm(item) {
        this.itemForm = this.fb.group({
            name: [item.name || '', Validators.required],
            age: [item.age || ''],
            email: [item.email || ''],
            company: [item.company || ''],
            phone: [item.phone || ''],
            address: [item.address || ''],
            balance: [item.balance || ''],
            isActive: [item.isActive || false]
        });
    }

    submit() {
        this.dialogRef.close(this.itemForm.value);
    }

}
