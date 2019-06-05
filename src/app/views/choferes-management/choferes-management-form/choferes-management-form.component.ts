import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'app-choferes-management-form',
    templateUrl: './choferes-management-form.component.html',
    styleUrls: ['./choferes-management-form.component.scss']
})
export class ChoferesManagementFormComponent implements OnInit {

    public uploader: FileUploader = new FileUploader({ url: 'https://evening-anchorage-315.herokuapp.com/api/' });
    public hasBaseDropZoneOver: boolean = false;

    public itemForm: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<ChoferesManagementFormComponent>,
                private fb: FormBuilder) { }

    ngOnInit() {
        this.buildItemForm(this.data.payload);
    }

    buildItemForm(item) {
        this.itemForm = this.fb.group({
            dni: [item.dni || '', Validators.required],
            nroLlaveMicroTrack: [item.nroLlaveMicroTrack || '']
            // email: [item.email || ''],
            // company: [item.company || ''],
            // phone: [item.phone || ''],
            // address: [item.address || ''],
            // balance: [item.balance || ''],
            // isActive: [item.isActive || false]
        });
    }

    submit() {
        this.dialogRef.close(this.itemForm.value);
    }

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

}
