import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

// Servicio
import { TipoVehiculoManagementService } from '../../tipos-vehiculos/tipo-vehiculo-management.service';
// Modelo
import { TipoVehiculo } from '../../../../models/tipoVehiculo.model';

@Component({
    selector: 'app-sub-tipo-vehiculo-form-management',
    templateUrl: './sub-tipo-vehiculo-form-management.component.html',
    styleUrls: ['./sub-tipo-vehiculo-form-management.component.scss']
})
export class SubTipoVehiculoFormManagementComponent implements OnInit {

    itemForm: FormGroup;

    tiposVehiculos: TipoVehiculo[];

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<SubTipoVehiculoFormManagementComponent>,
                private fb: FormBuilder,
                private tiposVehiculoService: TipoVehiculoManagementService) { }

    ngOnInit() {
        this.buildItemForm(this.data.payload);
        this.getTiposVehiculos();
    }

    buildItemForm(item) {
        this.itemForm = this.fb.group({
            nombre: [item.nombre || '', Validators.required],
            tipoVehiculo: [item.tipoVehiculo || '', Validators.required]
        });
    }

    submit() {
        this.dialogRef.close(this.itemForm.value);
    }

    getTiposVehiculos() {
        this.tiposVehiculoService.getAll().subscribe(value => {
            this.tiposVehiculos = value;
        },
        error => {

        });
    }

}
