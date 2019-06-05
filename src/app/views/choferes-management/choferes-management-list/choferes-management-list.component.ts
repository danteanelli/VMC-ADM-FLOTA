import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { Subscription } from 'rxjs';

// Animacion
import { egretAnimations } from '../../../shared/animations/egret-animations';

// Servicios
import { ChoferesManagementService } from '../choferes-management.service';

// Componente - Formulario - Modal
import {ChoferesManagementFormComponent} from '../choferes-management-form/choferes-management-form.component';

@Component({
    selector: 'app-choferes-management-list',
    templateUrl: './choferes-management-list.component.html',
    styleUrls: ['./choferes-management-list.component.scss'],
    animations: egretAnimations
})
export class ChoferesManagementListComponent implements OnInit {

    items: any[];
    getItemSub: Subscription;

    constructor(private dialog: MatDialog,
                private snack: MatSnackBar,
                private confirmService: AppConfirmService,
                private loader: AppLoaderService,
                private choferesService: ChoferesManagementService) {

    }

    ngOnInit() {
    }

    openPopUp(data: any = {}, isNew?) {
        let title = isNew ? 'Agregar Chofer' : 'Modificar Chofer';
        let dialogRef: MatDialogRef<any> = this.dialog.open(ChoferesManagementFormComponent, {
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
