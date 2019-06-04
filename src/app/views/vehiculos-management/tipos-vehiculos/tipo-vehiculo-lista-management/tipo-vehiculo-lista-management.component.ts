import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../../shared/services/app-loader/app-loader.service';

import { Subscription } from 'rxjs';
import { egretAnimations } from '../../../../shared/animations/egret-animations';

import { VehiculosService } from '../../vehiculos.service';
import {VehiculoFormManagementComponent} from '../../vehiculo-form-management/vehiculo-form-management.component';
import {TipoVehiculoFormManagementComponent} from '../tipo-vehiculo-form-management/tipo-vehiculo-form-management.component';

@Component({
    selector: 'app-tipo-vehiculo-lista-management',
    templateUrl: './tipo-vehiculo-lista-management.component.html',
    styleUrls: ['./tipo-vehiculo-lista-management.component.scss']
})
export class TipoVehiculoListaManagementComponent implements OnInit {

    items: any[];
    getItemSub: Subscription;

    constructor(private dialog: MatDialog,
                private snack: MatSnackBar,
                private confirmService: AppConfirmService,
                private loader: AppLoaderService,
                private vehiculoService: VehiculosService) { }

    ngOnInit() {
    }

    openPopUp(data: any = {}, isNew?) {
        let title = isNew ? 'Agregar Tipo Vehiculo/Equipo' : 'Modificar Tipo Vehiculo/Equipo';
        let dialogRef: MatDialogRef<any> = this.dialog.open(TipoVehiculoFormManagementComponent, {
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
                    // this.vehiculoService.addItem(res)
                    //     .subscribe( data => {
                    //         this.items = data;
                    //         this.loader.close();
                    //         this.snack.open('Member Added!', 'OK', { duration: 4000 });
                    //     });
                } else {
                    // this.vehiculoService.updateItem(data._id, res)
                    //     .subscribe( data => {
                    //         this.items = data;
                    //         this.loader.close();
                    //         this.snack.open('Member Updated!', 'OK', { duration: 4000 });
                    //     });
                }
            });
    }

}
