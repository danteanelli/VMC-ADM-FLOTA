import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

// Modelo - Clase
import { Marca } from '../../../../models/marca.model';

// Servicios
import { MarcasManagementService } from '../../marcas-management/marcas-management.service';

@Component({
    selector: 'app-modelos-management-form',
    templateUrl: './modelos-management-form.component.html',
    styleUrls: ['./modelos-management-form.component.scss']
})
export class ModelosManagementFormComponent implements OnInit {

    itemForm: FormGroup;

    marcas: Marca[];

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<ModelosManagementFormComponent>,
                private fb: FormBuilder,
                private marcasService: MarcasManagementService) { }

    ngOnInit() {
        this.buildItemForm(this.data.payload);
        this.getMarcas();
    }

    buildItemForm(item) {
        this.itemForm = this.fb.group({
            nombre: [item.nombre || '', Validators.required],
            marca: [item.marca || '', Validators.required]
        });
    }

    submit() {
        this.dialogRef.close(this.itemForm.value);
    }

    getMarcas() {
        this.marcasService.getAll().subscribe(value => {
            this.marcas = value;
        },
        error => {
            console.log('error al obtener las marcas');
        });
    }

}
