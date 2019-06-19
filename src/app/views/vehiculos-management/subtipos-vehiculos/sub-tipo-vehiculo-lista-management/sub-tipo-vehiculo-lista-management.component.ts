import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../../shared/services/app-loader/app-loader.service';

import { Subscription } from 'rxjs';
import { egretAnimations } from '../../../../shared/animations/egret-animations';

// Servicio
import { SubtipoVehiculosManagementService } from '../subtipo-vehiculos-management.service';

// Componente
import { SubTipoVehiculoFormManagementComponent } from '../sub-tipo-vehiculo-form-management/sub-tipo-vehiculo-form-management.component';

// Clase - Modelo
import { SubTipoVehiculo } from '../../../../models/subTipoVehiculo.model';

@Component({
    selector: 'app-sub-tipo-vehiculo-lista-management',
    templateUrl: './sub-tipo-vehiculo-lista-management.component.html',
    styleUrls: ['./sub-tipo-vehiculo-lista-management.component.scss'],
    animations: egretAnimations
})
export class SubTipoVehiculoListaManagementComponent implements OnInit {

    items: SubTipoVehiculo[];
    getItemSub: Subscription;

    constructor(private dialog: MatDialog,
                private snack: MatSnackBar,
                private confirmService: AppConfirmService,
                private loader: AppLoaderService,
                private subTipoService: SubtipoVehiculosManagementService) { }

    ngOnInit() {
        this.getSubTiposVehiculo();
    }

    getSubTiposVehiculo() {
        this.subTipoService.getAll().subscribe(data => {
           this.items = data;
        },
        error => {

        });
    }

    openPopUp(data: any = {}, isNew?) {
        let title = isNew ? 'Agregar Subtipo de Vehiculo/Equipo' : 'Modificar Subtipo de Vehiculo/Equipo';
        let dialogRef: MatDialogRef<any> = this.dialog.open(SubTipoVehiculoFormManagementComponent, {
            width: '720px',
            disableClose: true,
            data: { title: title, payload: data }
        });
        dialogRef.afterClosed()
            .subscribe(res => {
                if (!res) {
                    // If user press cancel
                    return;
                }
                this.loader.open();
                if (isNew) {
                    this.subTipoService.add(res)
                        .subscribe( data => {
                            this.getSubTiposVehiculo();
                            this.loader.close();
                            this.snack.open('Agregado correctamente!', 'OK', { duration: 4000 });
                        });
                } else {
                    this.subTipoService.update(data.id, res)
                        .subscribe( data => {
                            this.getSubTiposVehiculo();
                            this.loader.close();
                            this.snack.open('Modificado correctamente!', 'OK', { duration: 4000 });
                        });
                }
            });
    }

}
