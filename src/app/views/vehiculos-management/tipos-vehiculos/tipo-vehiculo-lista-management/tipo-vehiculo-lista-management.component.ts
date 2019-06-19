import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { egretAnimations } from '../../../../shared/animations/egret-animations';

// Servicio
import { AppConfirmService } from '../../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../../shared/services/app-loader/app-loader.service';
import { TipoVehiculoManagementService } from '../tipo-vehiculo-management.service';

// Componente
import { TipoVehiculoFormManagementComponent } from '../tipo-vehiculo-form-management/tipo-vehiculo-form-management.component';

// Modelo
import { TipoVehiculo } from '../../../../models/tipoVehiculo.model';

@Component({
    selector: 'app-tipo-vehiculo-lista-management',
    templateUrl: './tipo-vehiculo-lista-management.component.html',
    styleUrls: ['./tipo-vehiculo-lista-management.component.scss'],
    animations: egretAnimations
})
export class TipoVehiculoListaManagementComponent implements OnInit {

    items: TipoVehiculo[];
    getItemSub: Subscription;

    constructor(private dialog: MatDialog,
                private snack: MatSnackBar,
                private confirmService: AppConfirmService,
                private loader: AppLoaderService,
                private tiposVehiculoService: TipoVehiculoManagementService) { }

    ngOnInit() {
        this.getTiposVehiculos();
    }

    getTiposVehiculos() {
        this.tiposVehiculoService.getAll().subscribe(data => {
            this.items = data;
        },
        error => {

        });
    }

    openPopUp(data: any = {}, isNew?) {
        let title = isNew ? 'Agregar Tipo de Vehiculo/Equipo' : 'Modificar Tipo de Vehiculo/Equipo';
        let dialogRef: MatDialogRef<any> = this.dialog.open(TipoVehiculoFormManagementComponent, {
            width: '400px',
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
                    this.tiposVehiculoService.add(res)
                        .subscribe( data => {
                            this.getTiposVehiculos();
                            this.loader.close();
                            this.snack.open('Agregado correctamente!', 'OK', { duration: 4000 });
                        });
                } else {
                    this.tiposVehiculoService.update(data.id, res)
                        .subscribe( data => {
                            this.getTiposVehiculos();
                            this.loader.close();
                            this.snack.open('Modificado correctamente!', 'OK', { duration: 4000 });
                        });
                }
            });
    }

}
